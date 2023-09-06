import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetail() {
    // use params là 1 hook được cung cấp bởi react-router-dom  => lấy param trên url
    const param = useParams();
    console.log(param);
  return (
    <div>
          <p>Khóa học có id là: {param.id}</p>
    </div>
  )
}
