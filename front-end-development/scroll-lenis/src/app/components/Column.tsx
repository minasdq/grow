import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import classes from "../styles/column.module.scss";

interface ColumnProps {
  images: string[];
  y?: MotionValue<number>;
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div style={{ y }} className={classes.column}>
      {images.map((image, index) => (
        <div key={index} className={classes.imageContainer}>
          <Image
            key={index}
            src={`/assets/images/${image}`}
            fill
            alt="This is an image of the gallery."
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
