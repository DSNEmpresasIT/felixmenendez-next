import React from "react";

interface Props{
  width?:string,
  height?:string,
}

const quotationIcon =  (props: Props) => {
  const { width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 512 484"
      version="1.1"
    >
      <path
        d="M 41.180 18.682 C 39.353 19.582, 36.653 21.897, 35.180 23.827 C 32.594 27.213, 32.489 27.858, 32.178 42.168 L 31.856 57 27.928 57 L 24 57 24 65 L 24 73 28 73 L 32 73 32 226.599 C 32 398.046, 31.416 384.391, 38.988 389.876 C 42.595 392.489, 42.622 392.561, 41.255 395.911 C 39.450 400.333, 40.445 400.965, 49.250 400.985 L 56 401 56 259.265 L 56 117.529 94.265 79.265 L 132.529 41 214.265 41 L 296 41 295.985 34.250 C 295.965 25.445, 295.333 24.450, 290.911 26.255 C 287.561 27.622, 287.489 27.595, 284.876 23.988 C 279.443 16.488, 288.590 16.997, 159.849 17.023 C 55.097 17.043, 44.195 17.196, 41.180 18.682 M 464 429 L 464 465 472 465 L 480 465 480 429 L 480 393 472 393 L 464 393 464 429"
        stroke="none"
        fill="#348fd9"
        fill-rule="evenodd"
      />
      <path
        d="M 408.263 378.174 C 400.595 379.037, 391.529 383, 384.194 388.696 L 378.650 393 342.575 393.002 C 301.678 393.003, 301.166 393.088, 297.588 400.416 C 295.853 403.970, 295.807 404.702, 297.088 408.326 C 297.865 410.522, 299.770 413.260, 301.322 414.409 C 304.024 416.412, 305.488 416.512, 336.072 416.790 L 368 417.080 368 425.040 L 368 433 334.750 432.990 C 301.962 432.981, 301.430 432.948, 296.456 430.632 C 293.305 429.164, 289.364 426.005, 285.956 422.214 C 277.404 412.701, 254.608 394.205, 250.483 393.431 C 239.295 391.332, 230.226 399.992, 233.019 410.106 C 233.557 412.054, 235.010 414.588, 236.248 415.737 C 244.261 423.169, 297.091 463.152, 300 463.986 C 302.122 464.594, 322.503 464.991, 351.750 464.994 L 400 465 400 469 L 400 473 408 473 L 416 473 416 469 L 416 465 432 465 L 448 465 447.991 427.250 L 447.983 389.500 442.214 385.784 C 431.993 379.200, 421.018 376.740, 408.263 378.174"
        stroke="none"
        fill="#fec9a3"
        fill-rule="evenodd"
      />
      <path
        d="M 320.413 176.750 L 325.675 192.500 352 192.500 L 378.325 192.500 383.587 176.750 L 388.849 161 352 161 L 315.151 161 320.413 176.750 M 306.324 210.965 C 298.539 213.034, 294.681 214.781, 288.500 219.034 C 278.867 225.663, 270.508 236.775, 266.765 247.928 C 264.634 254.276, 264.541 256.275, 264.029 306.500 L 263.500 358.500 260.899 364.046 C 259.468 367.096, 256.855 371.234, 255.092 373.242 L 251.887 376.893 255.694 377.934 C 260.677 379.298, 264.890 381.947, 273.907 389.387 C 278.191 392.921, 281.487 395, 281.720 394.315 C 282.592 391.755, 288.038 385.073, 291.250 382.623 C 298.298 377.247, 300.352 377, 337.988 377 L 372.725 377 376.612 373.866 C 378.751 372.142, 383.666 369.213, 387.535 367.357 C 404.843 359.054, 424.284 359.083, 443.239 367.439 C 444.767 368.113, 444.707 367.617, 442.739 363.353 C 440.535 358.576, 440.492 357.683, 439.971 306.500 C 439.459 256.275, 439.366 254.276, 437.235 247.928 C 431.605 231.153, 417.863 217.408, 401.072 211.759 C 394.777 209.641, 392.794 209.538, 354 209.303 C 316.862 209.078, 312.904 209.216, 306.324 210.965 M 291.920 236.920 C 288.664 240.176, 286.009 243.439, 286.019 244.170 C 286.030 244.901, 288.906 247.177, 292.411 249.226 L 298.785 252.952 303.368 248.368 L 307.952 243.785 304.226 237.411 C 302.177 233.906, 299.901 231.030, 299.170 231.019 C 298.438 231.009, 295.176 233.664, 291.920 236.920 M 344 252.870 C 344 256.707, 343.962 256.744, 339.559 257.240 C 329.223 258.405, 321.081 266.981, 320.197 277.633 C 319.836 281.997, 320.253 283.998, 322.476 288.540 C 326.119 295.986, 329.339 297.921, 349.065 304.513 C 358.104 307.534, 366.063 310.766, 366.750 311.694 C 368.555 314.131, 368.290 316.710, 366 319 C 364.222 320.778, 362.667 321, 352 321 C 341.333 321, 339.778 320.778, 338 319 C 336.900 317.900, 336 316.100, 336 315 C 336 313.164, 335.333 313, 327.870 313 L 319.740 313 320.240 317.441 C 321.348 327.269, 329.731 335.652, 339.559 336.760 C 343.962 337.256, 344 337.293, 344 341.130 L 344 345 352 345 L 360 345 360 341.130 C 360 337.293, 360.038 337.256, 364.441 336.760 C 374.777 335.595, 382.919 327.019, 383.803 316.367 C 384.164 312.003, 383.747 310.002, 381.524 305.460 C 377.881 298.014, 374.661 296.079, 354.935 289.487 C 345.896 286.466, 337.938 283.234, 337.250 282.306 C 335.445 279.869, 335.710 277.290, 338 275 C 339.778 273.222, 341.333 273, 352 273 C 362.667 273, 364.222 273.222, 366 275 C 367.100 276.100, 368 277.900, 368 279 C 368 280.836, 368.667 281, 376.130 281 L 384.260 281 383.760 276.559 C 382.652 266.731, 374.269 258.348, 364.441 257.240 C 360.038 256.744, 360 256.707, 360 252.870 L 360 249 352 249 L 344 249 344 252.870 M 280 285 L 280 305 288 305 L 296 305 296 285 L 296 265 288 265 L 280 265 280 285"
        stroke="none"
        fill="#ffb531"
        fill-rule="evenodd"
      />
      <path
        d="M 144 79.962 C 144 107.413, 143.150 110.980, 134.565 119.565 C 125.979 128.151, 122.415 129, 94.949 129 L 71.974 129 72.237 275.250 L 72.500 421.500 74.681 425 C 75.880 426.925, 78.355 429.400, 80.181 430.500 C 83.398 432.439, 85.533 432.509, 149.750 432.777 L 216 433.055 216 437.027 L 216 441 228.596 441 L 241.192 441 232.879 434.343 C 223.382 426.738, 221.781 425.047, 218.819 419.500 C 215.848 413.935, 215.152 402.509, 217.422 396.566 C 219.817 390.294, 224.330 384.445, 228.728 381.914 C 231.450 380.347, 233.146 378.293, 234.789 374.569 C 236.044 371.726, 239.087 366.947, 241.551 363.950 C 244.015 360.952, 246.472 356.925, 247.010 355 C 247.584 352.948, 247.998 331.851, 248.012 304 C 248.038 249.884, 248.240 247.965, 255.429 233.500 C 263.145 217.978, 272.774 208.304, 288.290 200.489 C 293.124 198.054, 299.702 195.520, 302.908 194.858 L 308.737 193.654 302.368 174.606 C 298.866 164.129, 296 154.287, 296 152.733 C 296 151.068, 297.007 148.902, 298.455 147.455 C 300.874 145.035, 301.159 145, 318.455 145 L 336 145 336 137 L 336 129 332.054 129 L 328.108 129 327.804 98.750 C 327.507 69.234, 327.444 68.411, 325.212 64.821 C 323.869 62.661, 321.158 60.287, 318.647 59.071 C 314.422 57.026, 313.298 57, 229.184 57 L 144 57 144 79.962 M 105.509 90.989 L 83.517 113 99.047 113 C 113.163 113, 114.982 112.795, 119.038 110.750 C 122.355 109.078, 124.084 107.323, 125.777 103.914 C 127.891 99.657, 128.034 98.241, 127.777 84.154 L 127.500 68.979 105.509 90.989 M 160 89 L 160 97 232 97 L 304 97 304 89 L 304 81 232 81 L 160 81 160 89 M 160 121 L 160 129 196 129 L 232 129 232 121 L 232 113 196 113 L 160 113 160 121 M 109.105 147.635 C 103.343 150.506, 98.652 156.014, 96.945 161.911 C 96.247 164.324, 96.004 201.417, 96.203 275.079 L 96.500 384.657 99.526 389.552 C 101.401 392.585, 104.415 395.599, 107.447 397.474 L 112.340 400.500 156.170 400.780 L 200 401.060 200 393.030 L 200 385 180 385 L 160 385 160 373 L 160 361 196 361 L 232 361 232 353 L 232 345 196 345 L 160 345 160 333 L 160 321 196 321 L 232 321 232 313 L 232 305 196 305 L 160 305 160 293 L 160 281 196 281 L 232 281 232 273 L 232 265 196 265 L 160 265 160 253 L 160 241 196 241 L 232 241 232 233 L 232 225 196 225 L 160 225 160 213 L 160 201 212 201 L 264 201 264 193 L 264 185 212 185 L 160 185 160 173 L 160 161 220 161 L 280 161 280 153 L 280 145 197.196 145 L 114.393 145 109.105 147.635 M 114.923 163.923 C 112.122 166.724, 112 167.224, 112 175.923 L 112 185 128 185 L 144 185 144 173 L 144 161 130.923 161 L 117.846 161 114.923 163.923 M 112 213 L 112 225 128 225 L 144 225 144 213 L 144 201 128 201 L 112 201 112 213 M 112 253 L 112 265 128 265 L 144 265 144 253 L 144 241 128 241 L 112 241 112 253 M 112 293 L 112 305 128 305 L 144 305 144 293 L 144 281 128 281 L 112 281 112 293 M 112 333 L 112 345 128 345 L 144 345 144 333 L 144 321 128 321 L 112 321 112 333 M 112 370.077 C 112 378.776, 112.122 379.276, 114.923 382.077 L 117.846 385 130.923 385 L 144 385 144 373 L 144 361 128 361 L 112 361 112 370.077"
        stroke="none"
        fill="#56bfe1"
        fill-rule="evenodd"
      />
      <path
        d="M 39 1.935 C 30.665 4.480, 23.090 10.900, 18.865 19 C 16.728 23.098, 16.487 24.995, 16.175 40.250 L 15.831 57 23.844 57 L 31.856 57 32.178 42.168 C 32.489 27.838, 32.591 27.217, 35.194 23.809 C 40.767 16.509, 31.776 17, 160 17 C 288.504 17, 279.528 16.501, 284.821 23.935 L 287.367 27.512 294.684 25.158 C 298.708 23.863, 302 22.380, 302 21.862 C 302 19.688, 297.900 13.240, 294.335 9.809 C 292.226 7.779, 288.025 4.971, 285 3.569 L 279.500 1.020 160.500 1.096 C 95.050 1.138, 40.375 1.515, 39 1.935 M 94.272 79.257 L 55.975 117.554 56.238 272.027 L 56.500 426.500 58.856 431 C 62.066 437.131, 67.507 442.644, 73.500 445.836 L 78.500 448.500 147.250 448.777 L 216 449.053 216 441.047 L 216 433.041 149.073 432.771 C 83.251 432.504, 82.100 432.466, 79.385 430.438 C 77.866 429.304, 75.696 427.134, 74.562 425.615 C 72.504 422.859, 72.499 422.560, 72.240 275.992 L 71.980 129.131 95.740 128.816 C 118.966 128.507, 119.626 128.441, 125.086 125.880 C 132.187 122.550, 137.550 117.187, 140.880 110.086 C 143.441 104.625, 143.507 103.966, 143.816 80.734 L 144.131 56.968 230.993 57.234 C 316.954 57.497, 317.883 57.521, 320.615 59.562 C 322.134 60.696, 324.304 62.865, 325.438 64.383 C 327.400 67.010, 327.514 68.636, 327.791 98.071 L 328.082 129 336.092 129 L 344.101 129 343.801 96.250 C 343.505 64.077, 343.458 63.421, 341.144 59 C 337.934 52.869, 332.493 47.356, 326.500 44.164 L 321.500 41.500 227.034 41.230 L 132.569 40.960 94.272 79.257 M 105.509 90.989 L 83.517 113 99.291 113 C 116.839 113, 119.907 112.276, 124.257 107.107 C 127.746 102.960, 128.150 100.238, 127.796 83.239 L 127.500 68.978 105.509 90.989 M 16.010 228.750 L 16.020 384.500 18.569 390 C 19.971 393.025, 22.779 397.226, 24.809 399.335 C 28.240 402.900, 34.688 407, 36.862 407 C 37.380 407, 38.863 403.708, 40.158 399.684 L 42.512 392.367 38.935 389.821 C 31.426 384.475, 32 397.976, 32 226.599 L 32 73 24 73 L 16 73 16.010 228.750 M 160 89 L 160 97 232 97 L 304 97 304 89 L 304 81 232 81 L 160 81 160 89 M 160 121 L 160 129 196 129 L 232 129 232 121 L 232 113 196 113 L 160 113 160 121 M 113.994 145.934 C 107.135 148.021, 101.866 152.426, 98.364 159 C 96.578 162.354, 96.500 167.102, 96.500 273 C 96.500 378.898, 96.578 383.646, 98.364 387 C 100.973 391.899, 104.820 395.816, 109.500 398.342 C 113.396 400.444, 114.627 400.508, 156.750 400.790 L 200 401.080 200 393.040 L 200 385 180 385 L 160 385 160 373 L 160 361 196 361 L 232 361 232 353 L 232 345 196 345 L 160 345 160 333 L 160 321 196 321 L 232 321 232 313 L 232 305 196 305 L 160 305 160 293 L 160 281 196 281 L 232 281 232 273 L 232 265 196 265 L 160 265 160 253 L 160 241 196 241 L 232 241 232 233 L 232 225 196 225 L 160 225 160 213 L 160 201 212 201 L 264 201 264 193 L 264 185 212 185 L 160 185 160 173 L 160 161 220 161 L 280 161 280 153 L 280 145 198.250 145.086 C 153.287 145.133, 115.372 145.515, 113.994 145.934 M 300.321 146.189 C 299.123 146.768, 297.615 148.515, 296.971 150.070 C 295.933 152.577, 296.549 155.146, 302.400 172.700 C 306.030 183.590, 309 192.794, 309 193.151 C 309 193.508, 306.637 194.353, 303.750 195.028 C 282.045 200.105, 263.176 215.836, 254.140 236.388 C 248.712 248.733, 248.702 248.845, 248.080 304.519 L 247.500 356.538 241.343 364.707 C 237.957 369.200, 234.887 374.237, 234.522 375.900 C 234.108 377.787, 232.662 379.667, 230.679 380.896 C 216.222 389.863, 211.958 408.081, 220.984 422.313 C 222.534 424.758, 228.187 430.286, 233.575 434.625 C 256.620 453.187, 286.803 476.373, 290.500 478.355 C 294.424 480.459, 295.499 480.505, 347.250 480.784 L 400 481.067 400 473.034 L 400 465 350.250 464.994 C 309.171 464.989, 300.024 464.740, 297.771 463.564 C 296.271 462.781, 281.551 451.689, 265.062 438.915 C 234.565 415.290, 232 412.780, 232 406.567 C 232 402.178, 234.692 397.158, 238.190 395.026 C 241.738 392.862, 249.134 392.314, 253.185 393.914 C 256.777 395.333, 282.585 417.305, 286.239 422.055 C 288.032 424.387, 291.975 427.691, 295 429.398 L 300.500 432.500 334.250 432.799 L 368 433.099 368 425.049 L 368 417 336.404 417 C 308.951 417, 304.446 416.786, 302.040 415.364 C 298.319 413.167, 296 408.987, 296 404.478 C 296 401.498, 296.767 399.998, 299.882 396.882 L 303.765 393 340.734 393 L 377.704 393 381.102 390.511 C 396.015 379.589, 401.050 377.674, 415 377.620 C 426.950 377.574, 432.738 379.212, 442.344 385.357 L 448 388.975 448 426.988 L 448 465 432 465 L 416 465 416 473 L 416 481 453.826 481 L 491.651 481 493.826 478.686 C 495.995 476.376, 496 476.264, 496 428.860 L 496 381.349 493.686 379.174 C 491.613 377.227, 490.275 377, 480.886 377 L 470.402 377 469.222 373.750 C 468.574 371.962, 466.196 368.269, 463.940 365.542 C 455.992 355.939, 456.557 360.428, 456 302.500 L 455.500 250.500 452.365 241.739 C 450.641 236.920, 447.716 230.433, 445.865 227.323 C 441.094 219.307, 429.741 208.119, 421.278 203.094 C 414.388 199.002, 401.053 194, 397.036 194 C 395.343 194, 395.811 192.017, 401.574 174.779 C 405.108 164.207, 408 154.161, 408 152.453 C 408 150.501, 407.141 148.542, 405.686 147.174 L 403.371 145 352.936 145.068 C 319.791 145.112, 301.753 145.496, 300.321 146.189 M 114.455 163.455 C 112.191 165.718, 112 166.653, 112 175.455 L 112 185 128 185 L 144 185 144 173 L 144 161 130.455 161 C 117.406 161, 116.819 161.090, 114.455 163.455 M 320.413 176.750 L 325.675 192.500 352 192.500 L 378.325 192.500 383.587 176.750 L 388.849 161 352 161 L 315.151 161 320.413 176.750 M 432 185.688 C 430.075 189.363, 428.379 192.651, 428.230 192.994 C 428.082 193.338, 431.115 195.776, 434.972 198.411 C 445.979 205.931, 455.787 217.740, 461.633 230.509 C 463.015 233.529, 464.509 236, 464.951 236 C 465.394 236, 467.386 235.325, 469.378 234.500 C 471.370 233.675, 474.601 232.337, 476.558 231.527 L 480.115 230.054 475.091 220.277 C 466.806 204.155, 454.541 190.546, 440.270 181.640 C 437.943 180.188, 435.918 179.002, 435.770 179.004 C 435.621 179.006, 433.925 182.014, 432 185.688 M 112 213 L 112 225 128 225 L 144 225 144 213 L 144 201 128 201 L 112 201 112 213 M 308.500 210.163 C 305.750 210.680, 299.811 212.881, 295.302 215.055 C 281.841 221.544, 272.108 232.798, 266.378 248.500 C 264.727 253.025, 264.503 258.485, 264.027 306 C 263.506 357.915, 263.475 358.555, 261.231 363.420 C 259.983 366.127, 257.364 370.291, 255.410 372.675 C 252.996 375.622, 252.282 377.132, 253.180 377.394 C 260.290 379.470, 264.854 382.076, 272.525 388.442 L 281.500 395.890 283.363 392.195 C 286.026 386.912, 289.762 383.205, 295.500 380.157 L 300.500 377.500 336.803 377.203 L 373.105 376.906 377.803 373.296 C 395.377 359.788, 420.735 357.518, 443.239 367.439 C 444.767 368.113, 444.707 367.617, 442.739 363.353 C 440.534 358.573, 440.492 357.708, 439.977 306 C 439.504 258.430, 439.283 253.030, 437.626 248.500 C 432.194 233.647, 422.622 222.202, 410.151 215.649 C 398.380 209.463, 394.416 209.023, 351.500 209.129 C 330.600 209.181, 311.250 209.647, 308.500 210.163 M 291.920 236.920 C 288.664 240.176, 286.013 243.439, 286.030 244.170 C 286.046 244.901, 288.956 247.144, 292.495 249.153 L 298.931 252.805 303.380 248.357 L 307.828 243.909 304.164 237.464 C 302.149 233.919, 299.901 231.014, 299.170 231.009 C 298.438 231.004, 295.176 233.664, 291.920 236.920 M 112 253 L 112 265 128 265 L 144 265 144 253 L 144 241 128 241 L 112 241 112 253 M 344 252.864 C 344 256.706, 343.974 256.732, 339.331 257.368 C 325.987 259.197, 317.499 271.998, 321.002 285.009 C 321.825 288.065, 323.692 290.966, 326.855 294.103 C 331.161 298.373, 332.762 299.129, 348.761 304.442 C 365.824 310.108, 368 311.351, 368 315.434 C 368 316.295, 367.100 317.900, 366 319 C 364.222 320.778, 362.667 321, 352 321 C 341.333 321, 339.778 320.778, 338 319 C 336.900 317.900, 336 316.100, 336 315 C 336 313.167, 335.333 313, 328 313 C 320.363 313, 320 313.103, 320 315.257 C 320 325.470, 328.772 335.238, 339.185 336.619 C 343.999 337.258, 344 337.258, 344 341.129 L 344 345 352 345 L 360 345 360 341.136 C 360 337.301, 360.035 337.267, 364.606 336.641 C 370.686 335.807, 376.382 332.500, 379.509 327.987 C 386.195 318.339, 385.324 308.025, 377.137 299.895 C 372.838 295.626, 371.242 294.873, 355.239 289.558 C 338.176 283.892, 336 282.649, 336 278.566 C 336 277.705, 336.900 276.100, 338 275 C 339.778 273.222, 341.333 273, 352 273 C 362.667 273, 364.222 273.222, 366 275 C 367.100 276.100, 368 277.900, 368 279 C 368 280.833, 368.667 281, 376 281 C 383.637 281, 384 280.897, 384 278.743 C 384 268.530, 375.228 258.762, 364.815 257.381 C 360.001 256.742, 360 256.742, 360 252.871 L 360 249 352 249 L 344 249 344 252.864 M 280 285 L 280 305 288 305 L 296 305 296 285 L 296 265 288 265 L 280 265 280 285 M 112 293 L 112 305 128 305 L 144 305 144 293 L 144 281 128 281 L 112 281 112 293 M 112 333 L 112 345 128 345 L 144 345 144 333 L 144 321 128 321 L 112 321 112 333 M 112 370.545 C 112 379.347, 112.191 380.282, 114.455 382.545 C 116.819 384.910, 117.406 385, 130.455 385 L 144 385 144 373 L 144 361 128 361 L 112 361 112 370.545 M 464 429 L 464 465 472 465 L 480 465 480 429 L 480 393 472 393 L 464 393 464 429"
        stroke="none"
        fill="#040404"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default quotationIcon;