import { useEffect, useState } from "react";

export default function Yiyan({ defaultText }: { defaultText: string }) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    // 每次页面加载都会执行这个 useEffect
    fetch("https://v1.hitokoto.cn?encode=json&c=a")
      .then((res) => res.json())
      .then((data) => {
        const hitokoto = data.hitokoto || "加载失败";
        const from = data.from ? ` —— ${data.from}` : "";
        setText(`${hitokoto}${from}`);
      })
      .catch(() => setText(defaultText));
  }, []); // [] 保证每次刷新页面都会重新执行

  return (
    <p className="text-xs text-center text-balance text-secondary">
      {text}
    </p>
  );
}
