import React, { useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import useTranslation from '../hooks/useTranslation';
import { Box, Typography } from '@material-ui/core'

interface Props {
  step: number;
}

const LinearProgressBar: React.FC<Props> = ({ step }) => {
  const { locale, t } = useTranslation();
  const value = Math.round(step * 100 / 24);
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="right" justifyContent="end" textAlign='right'>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{t('step')} {step}/24</Typography>
        </Box>
      </Box>
      <style jsx>{`
        .ratingText {
          margin-left: 10px;
          overflow: auto;
          display: inline-block;
        }
        span:first-child {
            margin-left: 10px;
        }
        span + span {
            margin-left: 23px;
        }
      `}</style>
    </>

  )
}

export default LinearProgressBar
