import nextId from "react-id-generator";
import { AboutUsType } from "../../utils/types";
import dasha from "@/assets/dasha.jpg";
import mikica from "@/assets/mikica.jpg";
import vesna from "@/assets/vesna.jpg";

export const aboutItems: Array<AboutUsType> = [
  {
    id: nextId(),
    image: dasha,
    title: "Motivation and accountability",
    description:
      "It’s hard to skip the gym when you have a scheduled session with a trainer. they’ll push you to your limits.",
  },
  {
    id: nextId(),
    image: mikica,
    title: "Motivation and accountability",
    description:
      "It’s hard to skip the gym when you have a scheduled session with a trainer. they’ll push you to your limits.",
  },
  {
    id: nextId(),
    image: vesna,
    title: "Motivation and accountability",
    description:
      "It’s hard to skip the gym when you have a scheduled session with a trainer. they’ll push you to your limits.",
  },
];
