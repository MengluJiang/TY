import React from 'react';
import Masthead from './Masthead';
import NumericOnly from './NumericOnly';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      {/* Masthead */}
      <Masthead 
        screenSize="Small"
        darkMode={true}
        utilityIcons={true}
        status={true}
        notification={true}
      />

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* First Row */}
        <div className={styles.row}>
          <NumericOnly 
            parameterType="HR"
            value={70}
            lowLimit={60}
            highLimit={120}
            sqi={3}
            patientName="Last name, First name"
            patientLocation="Room-Bed"
          />
          <NumericOnly 
            parameterType="SpO2"
            value={98}
            lowLimit={90}
            highLimit="OFF"
            sqi={3}
            patientName="Last name, First name"
            patientLocation="Room-Bed"
          />
          <NumericOnly 
            parameterType="RR"
            value={20}
            lowLimit={12}
            highLimit={24}
            sqi={3}
            patientName="Last name, First name"
            patientLocation="Room-Bed"
          />
        </div>

        {/* Second Row */}
        <div className={styles.row}>
          <NumericOnly 
            parameterType="HR"
            value={65}
            lowLimit={60}
            highLimit={120}
            sqi={2}
            patientName="Smith, John"
            patientLocation="ICU-01"
          />
          <NumericOnly 
            parameterType="SpO2"
            value={95}
            lowLimit={90}
            highLimit="OFF"
            sqi={3}
            patientName="Johnson, Mary"
            patientLocation="Ward-A2"
          />
          <NumericOnly 
            parameterType="RR"
            value={18}
            lowLimit={12}
            highLimit={24}
            sqi={1}
            patientName="Brown, Robert"
            patientLocation="ER-05"
          />
        </div>
      </div>
    </div>
  );
}