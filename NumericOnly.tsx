import React from 'react';
import styles from './NumericOnly.module.css';

interface NumericOnlyProps {
  parameterType: 'HR' | 'RR' | 'SpO2';
  value: number;
  highLimit: number | string;
  lowLimit: number | string;
  sqi?: number; // Signal Quality Index (1-3)
  patientName?: string;
  patientLocation?: string;
}

const getParameterColor = (parameterType: 'HR' | 'RR' | 'SpO2'): string => {
  switch (parameterType) {
    case 'HR':
      return '#32FF32'; // light green
    case 'RR':
      return '#FFFF00'; // yellow
    case 'SpO2':
      return '#1EA5FF'; // blue
    default:
      return '#FFFFFF';
  }
};

const getParameterLabel = (parameterType: 'HR' | 'RR' | 'SpO2'): string => {
  switch (parameterType) {
    case 'HR':
      return 'HR /min';
    case 'RR':
      return 'RR /min';
    case 'SpO2':
      return 'SpO2 %';
    default:
      return '';
  }
};

const getSourceLabel = (parameterType: 'HR' | 'RR' | 'SpO2'): string | null => {
  switch (parameterType) {
    case 'HR':
      return '(ECG)';
    case 'RR':
      return '(Imped.)';
    case 'SpO2':
      return null;
    default:
      return null;
  }
};

export default function NumericOnly({
  parameterType,
  value,
  highLimit,
  lowLimit,
  sqi = 3,
  patientName = 'Last name, First name',
  patientLocation = 'Room-Bed'
}: NumericOnlyProps) {
  const color = getParameterColor(parameterType);
  const label = getParameterLabel(parameterType);
  const sourceLabel = getSourceLabel(parameterType);

  return (
    <div className={styles.numericOnly} data-node-id="6_3582">
      {/* Patient Banner */}
      <div className={styles.patientBanner}>
        <div className={styles.patientInfo}>
          <div className={styles.patientLocation}>{patientLocation}</div>
          <div className={styles.patientName}>{patientName}</div>
        </div>
      </div>

      {/* Parameter Header */}
      <div className={styles.parameterHeader}>
        <div className={styles.parameterTitle}>{label}</div>
        <div className={styles.limits}>
          <div className={styles.limitValue}>{lowLimit}</div>
          <div className={styles.alarmIcon}>⚠️</div>
          <div className={styles.limitValue}>{highLimit}</div>
        </div>
      </div>

      {sourceLabel && (
        <div className={styles.sourceLabel}>
          <div className={styles.sourceText}>{sourceLabel}</div>
        </div>
      )}

      {/* Main Value Display */}
      <div className={styles.mainDisplay}>
        <div className={styles.valueContainer}>
          <div 
            className={styles.value}
            style={{ color }}
          >
            {value}
          </div>
        </div>
        <div className={styles.sqiContainer}>
          {[1, 2, 3].map((level) => (
            <div 
              key={level}
              className={`${styles.sqiBar} ${level <= sqi ? styles.sqiActive : styles.sqiInactive}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}