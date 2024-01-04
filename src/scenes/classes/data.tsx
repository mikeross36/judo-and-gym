import nextId from "react-id-generator";
import { ClassType } from "../../utils/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";

export const classes: ClassType[] = [
  {
    id: nextId(),
    title: "Weight Training Classes",
    description:
      "Strength training offers many benefits and is often a fundamental component of exercise programs. Build Muscle, Lose Weight & Feel Great",
    image: image1,
  },
  {
    id: nextId(),
    title: "Weight Training Classes",
    description:
      "Strength training offers many benefits and is often a fundamental component of exercise programs. Build Muscle, Lose Weight & Feel Great",
    image: image2,
  },
  {
    id: nextId(),
    title: "Weight Training Classes",
    description:
      "Strength training offers many benefits and is often a fundamental component of exercise programs. Build Muscle, Lose Weight & Feel Great",
    image: image3,
  },
  {
    id: nextId(),
    title: "Judo Training Classes",
    description:
      "There are many reasons why someone would want to learn judo. Maybe you want to get fit, lose weight, or even compete in tournaments.",
    image: image4,
  },
  {
    id: nextId(),
    title: "Judo Training Classes",
    description:
      "There are many reasons why someone would want to learn judo. Maybe you want to get fit, lose weight, or even compete in tournaments.",
    image: image5,
  },
];
