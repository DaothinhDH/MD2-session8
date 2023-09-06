import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Course() {
    const [searchParam, setsearchParam] = useSearchParams()
  return (
    <div>
      <h1>Course table</h1>
      <table border={1} style={{ background: "Violet" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setsearchParam({ course: "ReactJs", price: "1200" })
                }
                style={{ background: "pink" }}
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Java</td>
            <td>1400</td>
            <td>
              <button
                onClick={() =>
                  setsearchParam({ course: "java", price: "1400" })
                }
                style={{ background: "pink" }}
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
          </table>
          
          <h3>Khóa học là: {searchParam.get("course")} - Giá:{searchParam.get("price")} </h3>
    </div>
  );
}
