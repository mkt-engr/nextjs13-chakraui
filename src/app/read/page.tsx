"use client";
import { Button } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const Read = () => {
  const [logText, setLogText] = useState<string[]>(["ログ出るよ"]);

  const handleScan = useCallback(async () => {
    setLogText((prev) => {
      return [...prev, `User clicked scan button`];
    });
    try {
      //@ts-ignore
      const ndef = new NDEFReader();
      await ndef.scan();

      setLogText((prev) => {
        return [...prev, `> Scan started`];
      });

      ndef.addEventListener("readingerror", () => {
        setLogText((prev) => {
          return [
            ...prev,
            `Argh! Cannot read data from the NFC tag. Try another one?`,
          ];
        });
      });

      //@ts-ignore
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        const { data, encoding, recordType, mediaType } = message.records[0];
        setLogText((prev) => {
          return [
            ...prev,
            `> Serial Number: ${serialNumber}`,
            `> Records: (${message.records.length})`,
            `> Records: (encoding:${encoding})`,
            `> Records: (recordType:${recordType})`,
            `> Records: (mediaType:${mediaType})`,
          ];
        });

        if (recordType === "text") {
          //テキストデータの場合
          const textDecoder = new TextDecoder(encoding);
          const text = textDecoder.decode(data);
          setLogText((prev) => {
            return [...prev, `> Records: (${text})`];
          });
        } else if (recordType === "mime" && mediaType === "application/json") {
          //JSONデータの場合
          const textDecoder = new TextDecoder();
          const json = JSON.parse(textDecoder.decode(data));
          console.log(json);
          setLogText((prev) => {
            return [...prev, `> Records: (${JSON.stringify(json)})`];
          });
        }
      });
    } catch (error) {
      setLogText((prev) => {
        return [...prev, "Argh! " + error];
      });
    }
  }, []);

  const handleWrite = useCallback(async () => {
    const now = dayjs().tz().format("YYYY/MM/DD - HH:mm:ss");
    console.log(now);
    setLogText((prev) => {
      return [...prev, `User clicked write button`];
    });
    try {
      //@ts-ignore
      const ndef = new NDEFReader();
      const encoder = new TextEncoder();
      const jsonRecord = {
        recordType: "mime",
        mediaType: "application/json",
        data: encoder.encode(JSON.stringify({ date: now })),
      };

      await ndef.write({ records: [jsonRecord] });

      setLogText((prev) => {
        return [...prev, `> Message written`];
      });
    } catch (error) {
      setLogText((prev) => {
        return [...prev, "Argh! " + error];
      });
    }
  }, []);

  return (
    <>
      <div>Read</div>
      <Button onClick={handleScan}>scan</Button>
      <Button onClick={handleWrite}>write</Button>
      {logText.map((log, i) => {
        return <div key={i.toString()}>{log}</div>;
      })}
    </>
  );
};

export default Read;
