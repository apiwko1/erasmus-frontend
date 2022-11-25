import React, { useState, useEffect } from 'react'
import useTranslation from '../hooks/useTranslation'
import { Rating } from '@material-ui/lab'

interface Props {
  name: string;
  value: any;
  max?: number;
  isHover?: boolean;
  isShowLegend?: boolean;
  onChange(e: any, val: any): void;
}

const RatingField: React.FC<Props> = ({ name, value, max = 6, isHover = true, onChange, isShowLegend = true }) => {
  const { locale, t } = useTranslation()
  const [hover, setHover] = useState('');

  const ratingsTable = [
    '', t('rating_field_strongly_disagree'), t('rating_field_disagree'), t('rating_field_slightly_disagree'), t('rating_field_slightly_agree'), t('rating_field_agree'), t('rating_field_strongly_agree'),
  ]

  const onRatingHover = (e) => {
    let starValue = e.target.children[1].innerText;
    let index = starValue.charAt(0);
    if (isShowLegend) {
      e.target.parentNode.parentNode.children[2].style.display = 'block';
      e.target.parentNode.parentNode.children[2].innerText = index + " - " + ratingsTable[index];
    }
  }

  const onRatingLeave = (e) => {
    if (isShowLegend) {
      e.target.parentNode.parentNode.children[2].style.display = 'none';
    }
  }

  return (
    <div className="root">
      <Rating
        max={max}
        name={name}
        value={value}
        precision={1}
        size="large"
        onMouseLeave={onRatingLeave}
        onMouseOver={onRatingHover}
        onChange={onChange}
        onChangeActive={(event, newHover) => {
          isHover && setHover(ratingsTable[newHover]);
        }}
      />
      {/* { isHover && <span className="ratingText">{hover || ratingsTable[value]}</span>} */}
      <div className="scales">
        <div className="scale">1</div>
        <div className="scale">2</div>
        <div className="scale">3</div>
        <div className="scale">4</div>
        <div className="scale">5</div>
        <div className="scale">6</div>
      </div>
      {isShowLegend && <div className="legend">{ratingsTable[1]}</div>}
      <style jsx>{`
        .legend{
          margin-top: 10px;
          display: none;
          width: 100%;
          text-align: center;
        }
        .root {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column wrap;
        }
        .scales {
          display: flex;
          flex-flow: row;
          width: 100%;
          align-items: flex-start;
          justify-content: center;
        }
        .scale:first-child {
          margin-left: 0;
        }
        .scale + .scale {
          margin-left: 21px;
        }
        .scale {
          display: flex;
          justify-content: center;
        }
        .ratingText {
          margin-left: 10px;
          overflow: auto;
          display: inline-block;
        }
        
      `}</style>
    </div>

  )
}

export default RatingField
