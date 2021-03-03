import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../components/Logo.js';
import { left, right } from '../modules/spin';

export default function Home() {
  const { flow } = useSelector(state => state.spin);
  const dispatch = useDispatch();

  const onLeft = useCallback(() => dispatch(left()), [dispatch]);
  const onRight = useCallback(() => dispatch(right()), [dispatch]);

  return <Logo flow={flow} onLeft={onLeft} onRight={onRight}></Logo>;
};

