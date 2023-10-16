import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/reducers/rootReducer";

import { fetchProductRequest } from "../../store/actions/productActions/productActions";
import { IProjectData } from "../../@types/IProjectData";
import useWindowSize from "../hooks/useWindowsSize";

export function ProjectBody({ id }: Pick<IProjectData, "id">) {
  const dispatch = useDispatch();
  const { pending, data, error } = useSelector(
    (state: RootState) => state.product
  );

  const { width: widthWindow, height: heighWindow } = useWindowSize();

  useEffect(() => {
    dispatch(fetchProductRequest(id));
  }, [dispatch, id]);

  return error ? (
    <div
      style={{
        color: "darkRed",
        fontSize: "0.8rem",
        fontWeight: "bold",
        marginTop: " 0.2rem",
        textAlign: "center",
      }}
    >
      {error}
    </div>
  ) : (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data && data.project.items && data.project.items.length > 0 ? (
            <svg width={data.project.width} height={data.project.height}>
              {data.project.items.map((item) => {
                if (
                  !item.x ||
                  !item.y ||
                  !item.width ||
                  !item.height ||
                  !item.rotation ||
                  !item.color ||
                  isNaN(item.rotation) ||
                  isNaN(item.x) ||
                  isNaN(item.y) ||
                  isNaN(item.width) ||
                  isNaN(item.height)
                ) {
                  console.error("Error: missing data from server");
                  return null;
                }
                const centerPoint = {
                  x: item.x,
                  y: item.y,
                };
                const w = item.width;
                const h = item.height;
                const Fi = (item.rotation * Math.PI) / 180;
                const H =
                  w * Math.abs(Math.sin(Fi)) + h * Math.abs(Math.cos(Fi));
                const W =
                  w * Math.abs(Math.cos(Fi)) + h * Math.abs(Math.sin(Fi));
                const x0 = centerPoint.x - W / 2;
                const y0 = centerPoint.y - H / 2;
                const boundingBox = {
                  x: x0,
                  y: y0,
                  width: W,
                  height: H,
                };
                const rotation = item.rotation;

                // bounding box for ellipse
                let centerX = item.x;
                let centerY = item.y;
                let radiusX = item.width / 2;
                let radiusY = item.height / 2;
                let degrees = item.rotation;

                let radians = degrees * (Math.PI / 180);
                let radians90 = radians + Math.PI / 2;
                let ux = radiusX * Math.cos(radians);
                let uy = radiusX * Math.sin(radians);
                let vx = radiusY * Math.cos(radians90);
                let vy = radiusY * Math.sin(radians90);

                let width = Math.sqrt(ux * ux + vx * vx) * 2;
                let height = Math.sqrt(uy * uy + vy * vy) * 2;
                let x = centerX - width / 2;
                let y = centerY - height / 2;

                const scale = Math.min(
                  widthWindow / data.project.width,
                  heighWindow / data.project.height
                );

                const translateX =
                  (widthWindow - data.project.width * scale) / 2;
                const translateY =
                  (heighWindow - data.project.height * scale) / 2;

                if (item.type === "rectangle") {
                  return (
                    <g
                      key={item.id}
                      transform={`translate(${translateX}, ${translateY}) scale(${scale})`}
                    >
                      <rect
                        x={boundingBox.x}
                        y={boundingBox.y}
                        width={boundingBox.width}
                        height={boundingBox.height}
                        fill="transparent"
                        stroke="red"
                      />

                      <rect
                        key={item.id}
                        x={item.x - item.width / 2}
                        y={item.y - item.height / 2}
                        width={item.width}
                        height={item.height}
                        fill={item.color}
                        transform={`rotate(${item.rotation}, ${item.x}, ${item.y})`}
                      />

                      <circle
                        cx={centerPoint.x}
                        cy={centerPoint.y}
                        r={5}
                        fill="red"
                      />
                      <text
                        x={centerPoint.x}
                        y={centerPoint.y}
                        fill="red"
                        fontSize="10"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fontWeight="bold"
                        transform={`translate(0, -10)`}
                      >
                        {rotation}
                      </text>
                    </g>
                  );
                } else if (item.type === "ellipse") {
                  return (
                    <g
                      key={item.id}
                      transform={`translate(${translateX}, ${translateY}) scale(${scale})`}
                    >
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill="transparent"
                        stroke="red"
                      />
                      <ellipse
                        key={item.id}
                        cx={item.x}
                        cy={item.y}
                        rx={item.width / 2}
                        ry={item.height / 2}
                        fill={item.color}
                        transform={`rotate(${item.rotation}, ${item.x}, ${item.y})`}
                      />

                      <circle
                        cx={centerPoint.x}
                        cy={centerPoint.y}
                        r={5}
                        fill="green"
                      />
                      <text
                        x={centerPoint.x}
                        y={centerPoint.y}
                        fill="red"
                        fontSize="10"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fontWeight="bold"
                        transform={`translate(0, -10)`}
                      >
                        {rotation}
                      </text>
                    </g>
                  );
                } else {
                  return null;
                }
              })}
            </svg>
          ) : (
            <div>No items</div>
          )}
        </div>
      )}
    </div>
  );
}
