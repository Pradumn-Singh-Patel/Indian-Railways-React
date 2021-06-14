import React, { useEffect, useState } from "react";
import Aos from "aos";

export default function Global() {
  const date = new Date().toDateString();
  const time = new Date().toTimeString().slice(0, 9);

  const [Time, setTime] = useState(time);

  function get_time() {
    let time = new Date().toTimeString().slice(0, 9);
    setTime(time);
  }
  setInterval(get_time, 1000);

  const array = [
    {
      date: { date },
      Time: { Time },
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <>{array}</>;
}
