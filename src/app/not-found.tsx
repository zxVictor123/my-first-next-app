import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

function notFound() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn&apos;t find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            back to homepage
          </button>
        </div>
        <div className="max-w-lg">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2395 1800"
            width="400"
          >
            <defs></defs>
            <title>Artboard 1 copy</title>
            <path
              className="cls-1"
              d="M1073.3,1016.93c-43.75-72.44-119.63-96.48-144.56-103.2h0a121.1,121.1,0,0,1-6-58.67c5.65-38.81,14.87-101.89,15.77-106.5L750,821.89,558.27,886.31c3.64,3,51.12,45.51,80.31,71.69a121.07,121.07,0,0,1,33,48.89h0c-14.84,21.13-57.72,88.19-44.92,171.84,12.09,79,67.16,129,103.83,162.39a396.42,396.42,0,0,0,88,60.44,121.54,121.54,0,0,0,98.43,19.6c5.76-1.34,16.84-4.18,27.22-7.38,4.58-1.42,10.4-3.23,17.06-5.57v0l1.1-.41,1.1-.39h0c6.61-2.47,12.24-4.8,16.67-6.65,10-4.19,20.35-9.11,25.63-11.77a121.54,121.54,0,0,0,63-78.09,396.28,396.28,0,0,0,28.85-102.77C1104.37,1159.06,1114.61,1085.35,1073.3,1016.93Z"
            />
            <ellipse
              className="cls-2"
              cx="748.2"
              cy="816.89"
              rx="202.22"
              ry="30.98"
              transform="translate(-233.49 303.67) rotate(-19.91)"
            />
            <path
              className="cls-3"
              d="M959,1447l-.09,82.82c0,6.19,6.66,11.22,14.88,11.23h.3c8.22,0,14.9-5,14.9-11.2l.09-81.9c0-.53-6.95-1-15.39-1H959"
            />
            <path
              className="cls-3"
              d="M1749,1447l-.09,82.82c0,6.19,6.66,11.22,14.88,11.23h.3c8.22,0,14.9-5,14.9-11.2l.09-81.9c0-.53-7-1-15.39-1H1749"
            />
            <path
              className="cls-4"
              d="M1825.5,1426.5H755.25a10.75,10.75,0,0,0-10.75,10.75h0A10.75,10.75,0,0,0,755.25,1448H1815a10.75,10.75,0,0,0,10.74-11l-.24-10.5"
            />
            <path
              className="cls-5"
              d="M701.74,867.5S663.12,1015,669.56,1076.79c3.84,36.88,2.64,98,1,141.4a52.4,52.4,0,0,1-104.76-1.3c-.27-22-2.78-38.74-.5-51.2,13.67-74.81-7.27-76,5.08-144.26q3.17-11.08,6.56-22.29c11.82-39,24.77-75.25,38.5-110.61,14.74-1.39,31.2-5.77,48.93-9.73C678,875.76,690.47,871.22,701.74,867.5Z"
            />
            <path
              className="cls-5"
              d="M719.77,1182.37c-8.92,0-15.45-12.93-18-18-17.59-34.83,9-95.59,19.32-117.16,9.86,22.2,34.32,82.46,16.74,117.16C735.17,1169.52,728.66,1182.37,719.77,1182.37Z"
            />
            <path
              className="cls-6"
              d="M1915.78,1027c-110.75-95.83-248-74.53-267.79-71.13-190.52,30.41-344.62,100-368.21,188.29a549.59,549.59,0,0,0-11.7,55.33c-47.15-8-126.29-11.92-172.38,38.22l-.23.26c-13.09,14.32-3.91,37.46,15.39,39.47,11.56,1.2,25.45,2.36,41.11,3.12,32.51,1.58,102.09,52,145.66,85.51A156.16,156.16,0,0,0,1404.34,1419l.66,0c12.09,8.11,44,27.11,88.17,26.43a153,153,0,0,0,66.95-16.73l160.38-2.2c74.24,21.55,133.85,19.3,170.18,14.75,52.21-6.53,71.81-19.57,80.58-26.78,30.3-25,41.33-63.94,49.13-102.93C2036.41,1231.43,2010.61,1109.06,1915.78,1027Z"
            />
            <path
              className="cls-6"
              d="M1267,1198c-9.38-27.55-23.66-79.78-24.88-129.15a393.76,393.76,0,0,1,12.55-108.79,334.61,334.61,0,0,1-32.62-173.74,17.07,17.07,0,0,1,26-13l132.1,82.11a320.21,320.21,0,0,1,150.63-4.18l119.81-98a13.73,13.73,0,0,1,22.29,8.61,456.39,456.39,0,0,1-16.57,202.39,188.88,188.88,0,0,1,7.14,87.26"
            />
            <path
              className="cls-5"
              d="M583.29,1375.5H583s-8.5-.11-16.44-7.73c-6.25-6-.85-32.43,18-63.08,16.1,31.14,20.08,57.13,14.16,63.08C591.12,1375.46,583.29,1375.5,583.29,1375.5Z"
            />
            <path
              className="cls-7"
              d="M2024.5,1260.5c14.81,6.82,38.24,20.41,54,46,36.42,59.15,9.28,145.76-41.37,191.33-36.76,33.08-79.09,38.28-112.39,42.57-19.52,2.51-110,13.78-172.14-42.57-12.57-11.4-42-38.11-37.66-71.13,2.25-17,13.79-39.69,33.47-46,37.71-12.14,60.28,50.17,131.09,57.83,10.2,1.1,53.88,4.58,88-23,5.59-4.52,14.81-13,26-32C2005,1364,2024.43,1323.52,2024.5,1260.5Z"
            />
            <path className="cls-8" d="M1560.5,1428.5s69-32,85-94" />
            <path
              className="cls-7"
              d="M1530.83,851.27l119.81-98a13.73,13.73,0,0,1,22.29,8.61c3.24,22.58,4.13,45.46,4.35,81S1665,911,1656.5,964.5a284.8,284.8,0,0,0-125.67-113.23Z"
            />
            <path
              className="cls-8"
              d="M1408.5,1420.5c-1.77-1.54-8.83-8-9-17.67-.11-7.92,4.52-13.56,6-15.33,12.18-14.84,33.82-8.35,59-15,11.91-3.15,28.36-10.22,46-28"
            />
            <ellipse
              className="cls-7"
              cx="1452.5"
              cy="998.5"
              rx="153"
              ry="117"
            />
            <circle className="cls-9" cx="1355" cy="991" r="31.5" />
            <path
              className="cls-10"
              d="M1672.5,762.5s-70,95-77,117c-5.24,16.45,18.62,8.3,31,3.14a2.87,2.87,0,0,1,3.69,3.88l-8.3,17.53a6.35,6.35,0,0,0,7.75,8.74l9.91-3.3a2.87,2.87,0,0,1,3.56,3.83l-3.59,17.18,17,34a457.51,457.51,0,0,0,16-202Z"
            />
            <path
              className="cls-7"
              d="M1379.5,855.5c-43.86-27.19-89.35-56.1-133.21-83.29-9.07-5.62-23.66,1.62-23.79,12.29-.27,22.81-4,48.1,3,83,3.77,18.84,5.45,28.58,9.26,41.5a315.06,315.06,0,0,0,19.74,50.5,199,199,0,0,1,18-29c5.75-7.71,26.56-34.42,64-56A221.93,221.93,0,0,1,1379.5,855.5Z"
            />
            <path
              className="cls-11"
              d="M1222.5,782.5s75.38,65.94,84.71,83.21c.55,1,2.89,5.62,1.16,7.71-3.3,4-17.41-6.08-23.87-.92a6.77,6.77,0,0,0-1.62,1.92,8,8,0,0,0,.75,8.68c2.16,2.87,5,7.47,4.73,11.84a6.33,6.33,0,0,1-1.15,3.63c-1.93,2.36-5.52,2.38-6.51,2.38-6.55,0-10.09-6.31-10.25-6.6a4.65,4.65,0,0,0-6,.13,3.51,3.51,0,0,0-.94,2,8.85,8.85,0,0,0,.82,5.06c2.17,4.39-.37,18.55-1.85,24.93a93.65,93.65,0,0,1-11,27c-9-19.66-21.15-51-27-89a326.82,326.82,0,0,1-3.49-62.74C1221.37,793.9,1222,787.3,1222.5,782.5Z"
            />
            <circle className="cls-12" cx="1355" cy="991" r="22.5" />
            <circle className="cls-9" cx="1557" cy="991" r="31.5" />
            <circle className="cls-12" cx="1557" cy="991" r="22.5" />
            <path
              className="cls-10"
              d="M1445.26,997.13l10.24,1.37,9.39-1.34a2.14,2.14,0,0,1,2.11,3.27l-9.09,14.28a3,3,0,0,1-4.94.08l-9.77-14.33A2.15,2.15,0,0,1,1445.26,997.13Z"
            />
            <path
              className="cls-13"
              d="M1454.74,1016.08s2.76,17.42-17.24,15.42"
            />
            <path
              className="cls-13"
              d="M1455.63,1017.08s-2.76,17.42,17.24,15.42"
            />
            <path className="cls-14" d="M1664.5,1001.5,1735,980" />
            <path className="cls-14" d="M1667,1017l66.5,10.5" />
            <path className="cls-14" d="M1244,1017l-60.5,13.5" />
            <path className="cls-14" d="M1246.5,1000.5,1180,990" />
            <path
              className="cls-15"
              d="M497.79,404c44.57,20.37,95.3,66.11,155.71,124.48,92.79,89.66,150.8,234.43,169,289-5.77,2.68-30.23-42.68-36-40-19.27-52.74-57.27-138.85-139-223-66.8-68.78-125-119.67-172-142Z"
            />
            <path
              className="cls-15"
              d="M745.55,850.16c-74.68-63-179.26-139.49-214.14-152.89-89.78-34.5-169.48-49.55-221.09-50.06q8.32-8.54,16.67-17.06c49-.22,119.61,13.39,199,41,31.84,11.09,153.72,90.48,241,170.65Z"
            />
            <path
              className="cls-15"
              d="M823.54,819.3c-17.76-23.9-59.56-97.14-83.92-120.77a597.13,597.13,0,0,0-166.5-113.78l-22.31,8.44A635.18,635.18,0,0,1,733.58,724.52c17.7,18.29,54.44,85.77,68.42,104Z"
            />
            <path
              className="cls-7"
              d="M1479.5,1367.5l34,76a192.85,192.85,0,0,1-51-1s-29.19-3.39-48.59-18c-13.48-10.12-14.12-17.25-14.29-19.38-.78-9.74,5.64-16.63,8.13-19l.75-.68c9-7.86,25-8.93,26-9C1444.74,1375.81,1458.89,1373.16,1479.5,1367.5Z"
            />
            <path
              className="cls-16"
              d="M1173.28,1285.23l30.22-89.73a156.61,156.61,0,0,0-60,11,149.83,149.83,0,0,0-38,23c-1,.85-15,12.88-15.5,24.47,0,.63,0,1.22,0,1.26.23,9.77,7.33,16,10.06,18l.82.6c8.37,5.92,18.58,5.26,33.63,5.63,8.49.21,12.73.32,18,1A113.17,113.17,0,0,1,1173.28,1285.23Z"
            />
            <path
              className="cls-17"
              d="M292.3,344.49l-28.05-15.3a40.34,40.34,0,0,1-20.8-39.64l2.35-22.21a61.8,61.8,0,0,1,26.57-44.52h0a29.52,29.52,0,0,1,29.48-2.22,82.16,82.16,0,0,0,8.28,3.32,234.66,234.66,0,0,1,86.78,54.37l-43.47,78.83Z"
            />
            <path
              className="cls-17"
              d="M318.73,318l-.69.05a40.94,40.94,0,0,0-37,32l-2.68,12.12a53.57,53.57,0,0,0,33.25,61.63L394.1,455.2,406.8,365l-57-38.69A48.91,48.91,0,0,0,318.73,318Z"
            />
            <path
              className="cls-17"
              d="M465,262.82l-32.13-42.59A53.66,53.66,0,0,0,379,200l-10.53,2.21A31.57,31.57,0,0,0,348.89,251l27,38.3,84.61,30.61Z"
            />
            <circle className="cls-9" cx="395.47" cy="335.18" r="65.13" />
            <path
              className="cls-17"
              d="M410.35,262.8l-3.18,24.43c-1.27,9.71,1.05,18.92,6.5,25.82l43.66,55.28,25.6,66.79a188.3,188.3,0,0,0,13.53-28.27s9.66-27.18,8.55-57.61c-2-56.48-41.85-101.41-48.51-108.74a21.18,21.18,0,0,0-11-7c-8.32-2-15.23,2.41-18.82,4.69C414.7,245.8,411.24,258.85,410.35,262.8Z"
            />
            <path
              className="cls-17"
              d="M393,455.33,343.6,432.5a42.53,42.53,0,0,1-21-55.8l10.27-23.18a56,56,0,0,1,70.16-30l59.18,21.35A54.61,54.61,0,0,1,497.69,404h0a72.53,72.53,0,0,1-17.51,34.08c-22.74,24.35-55.11,23-60.87,22.72A83.93,83.93,0,0,1,393,455.33Z"
            />
            <path
              className="cls-17"
              d="M220.48,538.45l-4.1-14.15a39.86,39.86,0,0,1,20.26-46.64h0a44.74,44.74,0,0,1,46.87,4c12.59,4.22,69.55,24.82,98.81,84.49a161.75,161.75,0,0,1,16.25,66.83A8.26,8.26,0,0,1,386,640.17Z"
            />
            <path
              className="cls-17"
              d="M173.88,677.25,191,690a87.06,87.06,0,0,0,16.42,9.6,175.79,175.79,0,0,0,21.43,7.83c15.81,4.64,54.81,16.06,98.18.1,33.26-12.24,53.93-35,64.71-49.86a7,7,0,0,0-4.9-11.16L198.54,625.16a32.86,32.86,0,0,0-33,17.77A27.41,27.41,0,0,0,173.88,677.25Z"
            />
            <path
              className="cls-17"
              d="M160.14,576h0a63.93,63.93,0,0,0,32.92,42l57.42,29.55c3.85,1.51,9.48,3.61,16.37,5.82a265.52,265.52,0,0,0,45,10.4c27.27,3.24,57.36-5.36,74.44-11.41a13.29,13.29,0,0,0,8.07-17c-10.22-28.29-25.28-44.58-33.77-52.46-15.68-14.55-34.71-24.26-49.92-32a314.15,314.15,0,0,0-29.59-13.23l-48.9-13.51A63.9,63.9,0,0,0,184.09,530l-4.91,2.74A39.23,39.23,0,0,0,160.14,576Z"
            />
            <path
              className="cls-17"
              d="M525.79,497.88a10.12,10.12,0,0,0-10.16,11.81c4,23.68,14.18,75.92,28.34,89.12,18.47,17.22,48.15,116.37,130.7,95.46,56.68-14.36,39.26-73.52,22.76-109.22a117,117,0,0,0-41.89-48.75A228.19,228.19,0,0,0,597,509,260,260,0,0,0,525.79,497.88Z"
            />
            <path
              className="cls-15"
              d="M857.63,805C860.5,803.5,830.5,512.5,746.5,400.5s-104-130-104-130-2,85,34,145,78,160,90,182,56,223,56,223Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default notFound;
