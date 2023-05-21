import { ImageResponse } from "next/server";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          fontSize: 32,
          fontWeight: 600,
          padding: "3px",
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: "8px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            height: "100%",
            width: "100%",
            margin: "10px",
          }}
        >
          <h2
            style={{
              color: "#fff",
            }}
          >
            <b>Harish Kumar S S</b>
          </h2>
          <p style={{ fontSize: 20, color: "#ddd", fontWeight: "semibold" }}>
            Frontend Engineer
          </p>
        </div>
      </div>
    )
  );
}
