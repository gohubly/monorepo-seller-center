import React from 'react';
import { Icon, Typography } from '..';

import styled from './stepper.style'
import { iStepper } from './stepper.interface'

export const Stepper: React.FC<iStepper> = ({
  currentStep,
  steps,
}) => {
  return (
    <styled.Container>
      {steps.map((_step, i) => {
        let isCurrentStep
        let isStepCompleted
        let isNextStepActive

        if (typeof currentStep === 'number') {
          isCurrentStep = currentStep === i
          isNextStepActive = currentStep === i + 1
          isStepCompleted = currentStep > i
        } else if (typeof currentStep === 'string') {
          const foundStepIndex = steps?.findIndex(__step => __step.label === currentStep)
          if (foundStepIndex) {
            isCurrentStep = foundStepIndex === i
            isNextStepActive = foundStepIndex === i
            isStepCompleted = foundStepIndex > i
          }
        }

        return (
          <>
            <styled.StepWrapper key={`step-wrapper-${_step.label}-${i}`} completed={isStepCompleted} active={isCurrentStep}>
              {isStepCompleted
                ? <Icon id="check" />
                : isCurrentStep
                  ? <Icon id={_step.icon} />
                  : <Typography color="grayscale600" size="medium">
                    {i + 1}
                  </Typography>
              }
            </styled.StepWrapper>
            {i + 1 !== steps.length && <styled.ProgressBar isNextStepActive={isNextStepActive} completed={isStepCompleted} active={isCurrentStep} />}
          </>
        )
      })}
    </styled.Container>
  )
}