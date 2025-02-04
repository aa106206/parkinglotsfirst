import axios from "axios";
import OpenApiPresenter from "./openapi.presenter";
import { useEffect, useState } from "react";

export default function OpenApiContainer() {
  const [dog, setDog] = useState<string[]>([]);

  useEffect(() => {
    const getApi = async () => {
      new Array(9).fill("아무거나").map(async (_) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random",
        );
        // setDog([...dog, result.data.message]);
        setDog((prev) => [...prev, result.data.message]);
      });
    };
    getApi();
  }, []);

  return <OpenApiPresenter dog={dog} />;
}
