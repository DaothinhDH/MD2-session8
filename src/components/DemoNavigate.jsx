import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function DemoNavigate() {
  // Navigate được sử dụng để chuyển trang sử dụng với history của trình duyệt
  // useNavigate là 1 hook được cung cấp bởi react-router-dom
  const navigate = useNavigate();

  return (
    <div>
      {/* Dùng để chuyển trang: Contact Page */}
          <button onClick={() => navigate("/contact")} style={{ color: "red", background: "pink" }}>Go to Contact Page</button>
          {/* sử dụng navigate với history */}
          <button onClick={() => navigate(-1)} style={{ color: "red", background: "pink" }}>Back</button>
          <button onClick={() => navigate(-2)} style={{ color: "red", background: "pink" }}>Backback</button>
          <button onClick={() => navigate(1)} style={{ color: "red", background: "pink" }}>forwatd</button>
          <button onClick={() => navigate(2)} style={{ color: "red", background: "pink" }}>forwatdforwatd</button>
          {/* sử dụng navigate với replace=true => không lưu history */}
          <button onClick={() => navigate("/contact", { replace: true })} style={{ color: "red", background: "pink" }}>
              Go to contact - Not save history</button>
          {/* sử dụng navigate để truyền dữ liệu => để lấy dữ liệu (ContactPage)=>uselocation để nhận data */}
          <button onClick={()=>navigate("/contact",{state:{number:10}})}>Go to contact with data</button>
    </div>
  );
}
