'use client'
import { useState, useEffect } from "react";
import cn from 'classnames';

import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
  // const [currentRating, setCurrentRating] = useState<number>(0);
  return (
    <div {...props}>
      {Array.from(Array(5)).map((_, i: number) => (
        <StarIcon
          key={i}
          className={cn(styles.mr5, {
            [styles.svg]: i < rating
          })}
        />
      ))}
    </div>
  );
};