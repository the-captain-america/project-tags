
import React from 'react';
import {
	EndingSoonContainer,
	GoingGoneContainer,
	PrimaryContainer,
} from './styles';
import { Tag } from '../../components';

export const EndingSoon = ({ text }) => (
  <EndingSoonContainer>
    <Tag text={text} />
  </EndingSoonContainer>
);

export const GoingGone = ({ text }) => (
  <GoingGoneContainer>
    <Tag text={text} />
  </GoingGoneContainer>
);

export const Primary = ({ text }) => (
  <PrimaryContainer>
    <Tag text={text} />
  </PrimaryContainer>
);
