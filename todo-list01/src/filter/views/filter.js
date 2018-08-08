import React from 'react';
import Link from './link';
const Filter = ()=>{
  return <div>
    <Link filter={'完成'}>完成</Link>
    <Link filter={'已完成'}>已完成</Link>
    <Link filter={'未完成'}>未完成</Link>
  </div>
}

export default Filter;
