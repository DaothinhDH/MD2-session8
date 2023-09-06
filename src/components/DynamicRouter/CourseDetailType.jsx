import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetailType() {
  const param = useParams();
  console.log(param);
  return <div>khóa học có id là: {param.id}- khóa học:{param.type} </div>;
}
