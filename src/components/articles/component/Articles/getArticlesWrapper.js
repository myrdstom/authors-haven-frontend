import React from 'react';
import { Link } from 'react-router-dom';

const GetArticlesWrapper = props => {
    return (
        <div className="articles__container">
            <div className="row">
                <div className="col-lg-7  d-none d-lg-block">
                    <div className="wrapper__image-container">
                        <div className="articles__wrapper">
                            <svg width="420" height="264" viewBox="0 0 110 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                    <g clip-path="url(#clip0)">
                                        <path d="M54.2 73.42C68.5042 73.42 80.1 71.9649 80.1 70.17C80.1 68.375 68.5042 66.92 54.2 66.92C39.8958 66.92 28.3 68.375 28.3 70.17C28.3 71.9649 39.8958 73.42 54.2 73.42Z" fill="#3F3D56"/>
                                        <path d="M98.0126 42.3811L88 47.1199L96.8615 40.4936C95.4213 38.2456 93.8033 36.1165 92.0232 34.1268L48.6 44.9199L87.8234 29.9574C86.031 28.376 84.1275 26.9251 82.1276 25.616L15.9609 36.2738C8.93571 45.0588 5.10606 55.9714 5.10065 67.22H104.699C104.695 58.4961 102.389 49.9279 98.0126 42.3811V42.3811Z" fill="#F2F2F2"/>
                                        <path d="M76.7123 22.5393C69.919 19.2259 62.4583 17.509 54.9 17.5197C39.517 17.5197 25.7639 24.495 16.629 35.4547C32.2716 32.0272 59.5067 26.0941 76.7123 22.5393Z" fill="#F2F2F2"/>
                                        <path opacity="0.4" d="M86.508 27.3282C87.332 27.3282 88 26.6602 88 25.8361C88 25.0121 87.332 24.3441 86.508 24.3441C85.684 24.3441 85.016 25.0121 85.016 25.8361C85.016 26.6602 85.684 27.3282 86.508 27.3282Z" fill="#6C63FF"/>
                                        <path opacity="0.4" d="M83.7466 27.5954C84.3247 27.5954 84.7933 27.1268 84.7933 26.5487C84.7933 25.9707 84.3247 25.5021 83.7466 25.5021C83.1686 25.5021 82.7 25.9707 82.7 26.5487C82.7 27.1268 83.1686 27.5954 83.7466 27.5954Z" fill="#6C63FF"/>
                                        <path opacity="0.4" d="M15.8752 32.9147C17.601 32.9147 19 31.5157 19 29.7899C19 28.0642 17.601 26.6651 15.8752 26.6651C14.1494 26.6651 12.7504 28.0642 12.7504 29.7899C12.7504 31.5157 14.1494 32.9147 15.8752 32.9147Z" fill="#6C63FF"/>
                                        <path opacity="0.4" d="M10.092 33.4744C11.3026 33.4744 12.284 32.493 12.284 31.2824C12.284 30.0718 11.3026 29.0903 10.092 29.0903C8.88139 29.0903 7.89999 30.0718 7.89999 31.2824C7.89999 32.493 8.88139 33.4744 10.092 33.4744Z" fill="#6C63FF"/>
                                        <path d="M106 67.12H4V67.32H106V67.12Z" fill="#2F2E41"/>
                                        <path d="M94.4441 67.12L86.5 55.3199C86.5 55.3199 98.5307 59.5199 97.1653 67.12H94.4441Z" fill="#3F3D56"/>
                                        <path d="M94.7559 67.12L102.7 55.3199C102.7 55.3199 90.6693 59.5199 92.0346 67.12H94.7559Z" fill="#6C63FF"/>
                                        <path d="M24.8 13.2772C24.8 12.6275 23.8736 12.1008 22.7309 12.1008C22.7083 12.1008 22.6859 12.1013 22.6634 12.1018C22.3187 11.045 20.6891 10.2448 18.7305 10.2448C17.0642 10.2448 15.636 10.8241 15.0345 11.6478C14.5902 11.5302 14.1323 11.4715 13.6727 11.4734C11.9205 11.4734 10.5 12.281 10.5 13.2772C10.5 14.1821 11.6722 14.9312 13.2004 15.0609C14.3108 15.2639 16.0454 15.3946 17.9949 15.3946C21.3045 15.3946 23.7262 14.7633 23.787 14.2887C24.3934 14.0836 24.8 13.7074 24.8 13.2772Z" fill="#F2F2F2"/>
                                        <path d="M74.8 13.7772C74.8 13.1275 73.8736 12.6008 72.7309 12.6008C72.7083 12.6008 72.6859 12.6013 72.6634 12.6018C72.3187 11.545 70.6891 10.7448 68.7306 10.7448C67.0642 10.7448 65.636 11.3241 65.0345 12.1478C64.5902 12.0302 64.1323 11.9715 63.6727 11.9734C61.9205 11.9734 60.5 12.781 60.5 13.7772C60.5 14.6821 61.6722 15.4312 63.2004 15.5609C64.3108 15.764 66.0454 15.8946 67.9949 15.8946C71.3045 15.8946 73.7262 15.2633 73.787 14.7887C74.3934 14.5836 74.8 14.2075 74.8 13.7772Z" fill="#F2F2F2"/>
                                        <path d="M102.7 5.32261C102.7 4.18224 101.074 3.2578 99.0682 3.2578C99.0285 3.2578 98.9892 3.25878 98.9498 3.2595C98.3447 1.40466 95.4844 -1.52588e-05 92.0466 -1.52588e-05C89.1217 -1.52588e-05 86.6149 1.01687 85.5592 2.46263C84.7793 2.25622 83.9756 2.15332 83.1688 2.15656C80.0932 2.15656 77.6 3.57405 77.6 5.3226C77.6 6.91097 79.6575 8.22589 82.3398 8.45354C84.2889 8.80992 87.3335 9.03926 90.7553 9.03926C96.5646 9.03926 100.815 7.93109 100.922 7.09813C101.986 6.73813 102.7 6.07788 102.7 5.32261Z" fill="#F2F2F2"/>
                                        <path d="M61.017 28.9909C58.9485 25.4958 54.8563 25.3329 54.8563 25.3329C54.8563 25.3329 50.8686 24.823 48.3105 30.146C45.9261 35.1075 42.6355 39.898 47.7807 41.0594L48.7101 38.1668L49.2856 41.2748C50.0182 41.3275 50.7532 41.34 51.4871 41.3124C56.9973 41.1345 62.2448 41.3644 62.0759 39.3872C61.8513 36.7587 63.0073 32.3538 61.017 28.9909Z" fill="#2F2E41"/>
                                        <path d="M47.4869 59.5989C47.4262 59.9833 47.338 60.3629 47.2231 60.7348C47.0936 61.0987 46.8938 61.4353 46.7754 61.8031C46.3982 62.9752 46.9212 64.2821 47.7564 65.1869C48.4808 65.9683 49.4157 66.5235 50.4486 66.7855C51.2021 66.975 51.9856 67.0022 52.7621 67.0286C54.9124 67.1015 57.1179 67.1667 59.1554 66.4757C59.7992 66.252 60.421 65.9695 61.0129 65.6318C61.1998 65.5428 61.3645 65.4131 61.4949 65.2523C61.6503 65.0311 61.6702 64.7442 61.6688 64.4738C61.6642 63.5622 61.4794 62.6553 61.5233 61.7448C61.5476 61.2405 61.642 60.7365 61.5955 60.2338C61.5312 59.6627 61.292 59.1256 60.9107 58.6957C60.5293 58.2659 60.0244 57.9644 59.4652 57.8325C58.8872 57.7084 58.2877 57.7761 57.6992 57.8326C56.1717 57.9794 54.6377 58.048 53.1033 58.0381C51.5354 58.0281 49.9772 57.7888 48.4172 57.7638C47.9558 57.7564 47.9652 57.8986 47.8183 58.3451C47.683 58.7561 47.5723 59.1748 47.4869 59.5989V59.5989Z" fill="#2F2E41"/>
                                        <path d="M51.9364 37.0902C51.861 37.4847 51.7796 37.8937 51.5425 38.2179C51.2697 38.5909 50.825 38.804 50.5316 39.161C50.0899 39.6983 50.0645 40.4544 50.0627 41.15C50.061 41.7908 50.074 42.4742 50.4314 43.0061C50.6633 43.3513 51.0161 43.5933 51.361 43.8257C52.701 44.7287 54.149 45.648 55.7647 45.6778C56.4341 45.6901 57.1519 45.5173 57.5924 45.013C57.7825 44.7762 57.9321 44.5094 58.0349 44.2235C58.448 43.2052 58.6984 42.1282 58.777 41.0321C58.8137 40.5164 58.8102 39.9856 58.6357 39.499C58.4394 38.9517 58.0426 38.5015 57.7803 37.9826C57.4702 37.3657 57.3568 36.6685 57.4553 35.9851C57.4684 35.9369 57.4644 35.8858 57.4439 35.8403C57.4224 35.8159 57.3955 35.7969 57.3653 35.7847C57.3352 35.7725 57.3026 35.7674 57.2702 35.7699L54.0666 35.5393C53.7682 35.5244 53.4711 35.4904 53.1771 35.4375C53.0044 35.4024 52.5483 35.1571 52.3836 35.2223C52.0788 35.3431 51.9988 36.7631 51.9364 37.0902Z" fill="#FFB8B8"/>
                                        <path opacity="0.1" d="M51.9364 37.0902C51.861 37.4847 51.7796 37.8937 51.5425 38.2179C51.2697 38.5909 50.825 38.804 50.5316 39.161C50.0899 39.6983 50.0645 40.4544 50.0627 41.15C50.061 41.7908 50.074 42.4742 50.4314 43.0061C50.6633 43.3513 51.0161 43.5933 51.361 43.8257C52.701 44.7287 54.149 45.648 55.7647 45.6778C56.4341 45.6901 57.1519 45.5173 57.5924 45.013C57.7825 44.7762 57.9321 44.5094 58.0349 44.2235C58.448 43.2052 58.6984 42.1282 58.777 41.0321C58.8137 40.5164 58.8102 39.9856 58.6357 39.499C58.4394 38.9517 58.0426 38.5015 57.7803 37.9826C57.4702 37.3657 57.3568 36.6685 57.4553 35.9851C57.4684 35.9369 57.4644 35.8858 57.4439 35.8403C57.4224 35.8159 57.3955 35.7969 57.3653 35.7847C57.3352 35.7725 57.3026 35.7674 57.2702 35.7699L54.0666 35.5393C53.7682 35.5244 53.4711 35.4904 53.1771 35.4375C53.0044 35.4024 52.5483 35.1571 52.3836 35.2223C52.0788 35.3431 51.9988 36.7631 51.9364 37.0902Z" fill="black"/>
                                        <path d="M55 37.5198C57.5957 37.5198 59.7 35.4155 59.7 32.8198C59.7 30.224 57.5957 28.1198 55 28.1198C52.4042 28.1198 50.3 30.224 50.3 32.8198C50.3 35.4155 52.4042 37.5198 55 37.5198Z" fill="#FFB8B8"/>
                                        <path d="M52.5956 43.3467C52.8405 43.6028 53.1001 43.8563 53.4211 44.0064C53.7479 44.1414 54.0988 44.2083 54.4524 44.2027C55.2996 44.2266 56.2181 44.0713 56.8074 43.4622C57.5672 42.6771 57.5421 41.4107 58.1376 40.4947C58.1856 40.4117 58.2511 40.34 58.3295 40.2848C58.4294 40.2305 58.5423 40.2045 58.6559 40.2098C59.408 40.2028 60.0631 40.6906 60.6544 41.1554C60.9193 41.3637 61.1907 41.5794 61.3578 41.872C61.4747 42.1001 61.5548 42.3453 61.595 42.5984C61.8885 44.0307 61.9835 45.4953 62.0778 46.9543C62.1299 47.7602 62.182 48.5668 62.1781 49.3744C62.1654 52.0349 61.547 54.651 60.932 57.2395C60.8528 57.5731 60.7444 57.9459 60.441 58.1056C60.3058 58.1664 60.1606 58.2019 60.0126 58.2102C58.2513 58.4171 56.4863 58.6242 54.7131 58.6515C54.0211 58.6621 53.3294 58.6454 52.638 58.6012C52.5189 58.5996 52.4009 58.5791 52.2884 58.5403C52.1357 58.4669 52.0044 58.3555 51.9073 58.2167C50.9481 57.008 50.8915 55.3369 50.8977 53.7939C50.9126 50.0214 51.0474 46.2519 51.302 42.4854C51.323 42.1745 51.3276 41.7969 51.1036 41.5524C51.507 42.1981 52.068 42.7953 52.5956 43.3467Z" fill="#D0CDE1"/>
                                        <path d="M51.6 37.9198C51.4412 38.2072 50.2709 38.9207 50.045 39.1589C48.7826 40.4895 46.4786 40.4396 45.3241 41.8648C44.9179 42.3662 44.7068 42.9963 44.5516 43.6226C44.3321 44.5085 44.2149 45.4747 44.5826 46.31C44.9364 47.1138 45.6813 47.6695 46.1871 48.3874C46.7424 49.1758 46.9921 50.1329 47.2313 51.067C47.408 51.7568 47.5861 52.4636 47.5173 53.1722C47.4391 53.9779 47.0492 54.7157 46.819 55.4918C46.5888 56.2678 46.5491 57.1922 47.0813 57.8021C47.4724 58.2502 48.0857 58.4278 48.672 58.5277C49.4229 58.6405 50.18 58.7065 50.9391 58.7251C51.6093 58.7547 52.348 58.7605 52.8632 58.3308C53.2697 57.9918 53.4464 57.4417 53.4693 56.9129C53.4922 56.3841 53.3821 55.8599 53.3132 55.3351C53.2418 54.7911 53.2143 54.2423 53.1914 53.694C53.0883 51.2342 53.0742 48.7727 53.1492 46.3097C53.1648 45.7971 53.1837 45.2783 53.0744 44.7774C52.9307 44.1185 52.5746 43.5296 52.2775 42.9243C51.6877 41.7227 51.4088 40.5554 51.5 39.2198C51.59 37.9016 52.1649 36.8973 51.6 37.9198Z" fill="#6C63FF"/>
                                        <path d="M58.2 38.0198C58.4418 38.2683 59.2634 38.3502 59.5709 38.5103C59.8602 38.6439 60.1621 38.7485 60.4722 38.8223C61.5941 39.146 62.6612 39.6358 63.6381 40.2754C63.8411 40.3941 64.0206 40.5492 64.1676 40.7327C64.3396 40.9721 64.4021 41.2708 64.4604 41.5597C64.611 42.3058 64.7624 43.0608 64.7286 43.8211C64.6926 44.6282 64.4495 45.4098 64.2084 46.1808L63.3072 49.0618C62.6346 51.2122 61.9577 53.3838 61.7684 55.629C61.6637 56.8733 61.7103 58.1258 61.9071 59.3589C61.9269 59.4829 61.9435 59.625 61.8616 59.7202C61.8023 59.7789 61.7241 59.8148 61.641 59.8217C61.206 59.8897 60.7851 59.668 60.3911 59.4717C59.1867 58.8724 57.9013 58.4518 56.5756 58.2233C57.0936 57.4746 57.4933 56.6506 57.7606 55.7803C57.9125 55.2276 58.032 54.6666 58.1187 54.1001L58.5379 51.6756C58.7085 50.7894 58.8285 49.8943 58.8975 48.9945C58.9292 48.6568 58.9095 48.3163 58.8392 47.9845C58.7425 47.6688 58.6143 47.3636 58.4563 47.0737C57.7654 45.6366 57.4413 43.9967 57.7131 42.4255C57.8321 41.7379 58.0632 41.0494 57.9668 40.3583C57.8742 39.6938 57.9705 39.1774 57.8 38.5198C57.1 35.8198 57.7451 37.5523 58.2 38.0198Z" fill="#6C63FF"/>
                                        <path d="M45.3121 44.1369C44.9972 44.7904 44.4706 45.3472 44.2914 46.0503C44.2217 46.3788 44.1918 46.7146 44.2024 47.0503C44.1982 47.5563 44.1954 48.0725 44.3508 48.554C44.4508 48.8641 44.6135 49.15 44.7307 49.4539C44.8942 49.8785 44.967 50.3326 44.9445 50.7871C44.9128 51.4166 44.699 52.0277 44.6823 52.6579C44.656 53.6488 45.1143 54.5804 45.5615 55.465C45.6741 55.1863 45.8462 54.9355 46.0658 54.7302C46.2854 54.5249 46.5473 54.3701 46.833 54.2765C47.1187 54.183 47.4214 54.153 47.7199 54.1887C48.0184 54.2243 48.3055 54.3248 48.5611 54.483C48.6791 54.374 48.6917 54.1951 48.6963 54.0346C48.7293 52.885 48.7612 51.7353 48.7919 50.5856C48.8404 48.8075 48.8865 47.0056 48.4774 45.2746C48.2928 44.493 48.0054 43.7144 47.4786 43.1082C47.2013 42.789 46.2596 41.9482 45.8043 42.3058C45.5995 42.4666 45.6474 42.9043 45.615 43.126C45.566 43.4764 45.4639 43.8173 45.3121 44.1369V44.1369Z" fill="#6C63FF"/>
                                        <path d="M64.8206 42.2534C64.9696 42.7173 64.9785 43.213 64.9815 43.7001C64.9875 44.694 64.9744 45.6877 64.942 46.6812C64.9254 47.1899 64.9025 47.7055 64.7483 48.1905C64.6466 48.5104 64.4897 48.8103 64.3846 49.129C64.0698 50.0843 64.2418 51.1205 64.2688 52.1259C64.2879 52.4514 64.2601 52.7779 64.1863 53.0954C64.0202 53.7187 63.5737 54.2224 63.2621 54.7872C62.9662 55.3236 62.7876 55.9249 62.4342 56.4253C62.0807 56.9257 61.4688 57.3222 60.8758 57.1686C60.4264 57.0522 60.1071 56.6544 59.8862 56.2462C59.4043 55.3485 59.2395 54.3144 59.4184 53.3113C59.6402 52.091 60.357 51.0083 60.6155 49.7952C60.9705 48.1294 60.431 46.4103 60.447 44.7072C60.4397 44.4402 60.4759 44.1738 60.5543 43.9184C60.6899 43.5294 60.9811 43.2187 61.2501 42.9067C61.5863 42.5168 61.8987 42.1069 62.1854 41.6793C62.378 41.392 62.6396 40.6532 62.9811 40.5918C63.7435 40.4546 64.6315 41.6644 64.8206 42.2534Z" fill="#6C63FF"/>
                                        <path d="M41.356 58.858C40.9344 58.7521 40.5 58.7059 40.0656 58.7208C39.6091 58.7461 39.1632 58.8682 38.7576 59.0791C38.352 59.29 37.9959 59.5848 37.713 59.944C37.4301 60.3032 37.227 60.7184 37.117 61.1622C37.0071 61.606 36.9929 62.068 37.0754 62.5177C37.1806 63.0048 37.3527 63.4751 37.5867 63.9151C37.9289 64.6096 38.3394 65.3025 38.973 65.7476C39.3436 66.008 39.7725 66.1703 40.1964 66.33L43.5333 67.587C44.0241 67.7719 44.5151 67.9569 45.0109 68.1284C47.5015 68.9893 50.0981 69.5055 52.7286 69.6627C53.5298 69.7104 54.3432 69.7237 55.1248 69.5413C55.3103 69.498 55.5082 69.4334 55.6156 69.2761C55.6792 69.1653 55.7167 69.0414 55.7252 68.914L55.9306 67.4765C55.9595 67.2741 55.9873 67.061 55.9131 66.8705C55.8191 66.6289 55.5833 66.4769 55.3585 66.3478C53.1647 65.0878 50.6033 64.3927 48.7567 62.6634C48.322 62.2563 47.9583 61.611 47.4301 61.3344C46.8312 61.0208 46.1258 60.8419 45.5068 60.5529C44.1534 59.9212 42.8228 59.1952 41.356 58.858Z" fill="#2F2E41"/>
                                        <path opacity="0.1" d="M44.6874 60.796C45.8669 61.1655 50.8465 63.726 51.7 64.62C51.5856 64.6612 47.7039 62.4858 47.5874 62.4508C46.5287 62.1331 45.464 61.8132 44.4586 61.3482C44.2563 61.2547 43.1445 60.815 43.1949 60.5598C43.2517 60.2718 44.4781 60.7303 44.6874 60.796Z" fill="black"/>
                                        <path d="M59.4017 70.4082C59.4686 70.4131 59.5351 70.3936 59.5887 70.3532C59.6122 70.323 59.6294 70.2884 59.6395 70.2515C59.6495 70.2145 59.6521 70.176 59.6471 70.138C59.6453 69.4852 59.6434 68.8324 59.6416 68.1797C59.0785 67.9114 58.4486 67.8253 57.8303 67.7427L54.9454 67.3571C55.0117 67.366 54.4944 68.5996 54.5737 68.7643C54.7135 69.0546 55.782 69.3119 56.0835 69.449C57.1318 69.9254 58.2211 70.4492 59.4017 70.4082Z" fill="#FFB8B8"/>
                                        <path d="M50.3505 68.1729C49.8058 68.2596 49.1979 68.3363 48.8451 68.7603C48.3978 69.298 48.5882 70.0996 48.8016 70.7657C48.8333 70.9005 48.897 71.0256 48.9872 71.1306C49.1328 71.2743 49.356 71.2953 49.5601 71.3083C50.0569 71.3397 50.5855 71.3644 51.0195 71.1207C51.2161 70.9908 51.4054 70.8501 51.5865 70.6993C51.9065 70.4863 52.2583 70.3255 52.6288 70.2228C53.3098 70.0085 54.0109 69.8641 54.7211 69.7916C55.001 69.7788 55.278 69.73 55.5454 69.6463C55.8073 69.5476 56.0498 69.352 56.1258 69.0827C56.2264 68.7268 56.0195 68.364 55.8212 68.0519C55.574 67.6631 55.3122 67.2537 54.9438 66.9675C54.4062 66.5499 54.1403 66.8705 53.5989 67.1377C52.574 67.6435 51.479 67.9924 50.3505 68.1729V68.1729Z" fill="#FFB8B8"/>
                                        <path d="M48.9271 68.6635L45.4685 67.6413C45.0479 67.517 44.62 67.3916 44.1814 67.3919C43.7428 67.3922 43.2839 67.536 42.9994 67.8699C42.7313 68.1846 42.6545 68.6148 42.5876 69.0229L42.4446 69.8959C42.3719 70.3395 42.2991 70.7916 42.3645 71.2364C42.43 71.6811 42.657 72.1255 43.0516 72.3408C43.5302 72.6019 44.1168 72.4743 44.6509 72.3651C45.7299 72.1446 46.8273 72.0269 47.9285 72.0137C48.3424 72.0087 48.7766 72.0139 49.1424 71.82C49.5773 71.5896 49.8374 71.1023 49.8821 70.6122C49.9502 69.8665 49.7016 68.8925 48.9271 68.6635Z" fill="#2F2E41"/>
                                        <path d="M60.7612 67.7727C61.2096 67.6941 61.6053 67.4393 62.0349 67.2889C62.6396 67.0772 63.2949 67.0772 63.9356 67.0795C64.1708 67.0804 64.4212 67.0857 64.617 67.216C64.8992 67.4039 64.9716 67.7799 65.0196 68.1155L65.3091 70.1405C65.3635 70.5214 65.4177 70.9124 65.3327 71.2877C65.2478 71.6629 64.992 72.0247 64.6196 72.1215C64.1674 72.2391 63.724 71.9502 63.297 71.7604C62.2297 71.2861 60.9891 71.4073 59.8763 71.0528C59.6697 70.987 59.4486 70.8864 59.3643 70.6867C59.3262 70.5742 59.3127 70.4549 59.3245 70.3367C59.3435 69.6858 59.2063 68.7971 59.4022 68.175C59.5784 67.6156 60.2608 67.7727 60.7612 67.7727Z" fill="#2F2E41"/>
                                        <path d="M68.0803 58.043C68.7714 57.8697 69.4878 57.8207 70.1961 57.8984C70.7617 57.9607 71.3444 58.1181 71.7574 58.5096C72.26 58.9861 72.4215 59.723 72.435 60.4155C72.4571 61.7947 71.9996 63.1388 71.1408 64.2182C70.9311 64.4912 70.6817 64.7313 70.4009 64.9305C70.098 65.12 69.7751 65.2756 69.4382 65.3944L61.9654 68.3419C59.9995 69.1173 58.0266 69.895 55.976 70.4062C55.92 70.4333 55.8591 70.4489 55.7969 70.452C55.7347 70.4552 55.6725 70.4459 55.614 70.4247C55.5555 70.4035 55.5018 70.3707 55.4561 70.3285C55.4104 70.2862 55.3736 70.2352 55.3479 70.1785C54.6932 69.2433 54.1439 68.2385 53.7101 67.1825C53.6896 67.1574 53.6754 67.1277 53.6687 67.096C53.6621 67.0642 53.6632 67.0313 53.6719 67.0001C53.6807 66.9689 53.6968 66.9402 53.719 66.9165C53.7412 66.8929 53.7687 66.8749 53.7993 66.8642L59.0849 63.8272C59.4635 63.6097 59.8463 63.389 60.1607 63.086C60.3891 62.8646 60.5762 62.6042 60.713 62.317C60.8226 62.0882 60.8328 61.5481 60.9727 61.379C61.1098 61.2134 61.5785 61.2002 61.795 61.135C62.1003 61.0415 62.3992 60.9285 62.6901 60.7967C63.8724 60.2677 64.9253 59.4992 66.0587 58.8799C66.6944 58.5164 67.3737 58.2352 68.0803 58.043V58.043Z" fill="#2F2E41"/>
                                        <path opacity="0.1" d="M65.0839 60.311C64.1758 60.993 63 61.6199 62.1 62.3199C61.7929 62.5588 56.6724 65.4376 56.6 65.8199C57.4397 65.9614 62.7883 62.2196 63.5536 61.8462C64.3188 61.4729 64.9972 60.9463 65.6694 60.4237C65.8407 60.2905 66.5667 59.8901 66.075 59.7413C65.7979 59.6575 65.2884 60.1746 65.0839 60.311Z" fill="black"/>
                                        <path d="M60.1025 28.6539L56.0595 26.5362L50.4764 27.4025L49.3212 32.5045L52.1967 32.3939L53 30.5195V32.363L54.3268 32.3119L55.0969 29.3279L55.5782 32.5045L60.295 32.4082L60.1025 28.6539Z" fill="#2F2E41"/>
                                        <path d="M59.2 39.1198H50.5V49.6199H59.2V39.1198Z" fill="#3F3D56"/>
                                        <path d="M46.3698 57.3822C46.5696 57.6804 46.8036 57.9721 47.1245 58.1329C47.3291 58.2264 47.5523 58.2718 47.7772 58.2658C48.002 58.2598 48.2225 58.2024 48.4218 58.0982C48.8198 57.8848 49.1456 57.5581 49.358 57.1595C49.7974 56.3836 49.8884 55.4552 49.8336 54.5652C49.7787 53.6752 49.5887 52.7988 49.5046 51.9111C49.4435 51.2658 49.4385 50.6167 49.4336 49.9685C49.4184 49.8322 49.447 49.6946 49.5152 49.5756C49.6125 49.4427 49.7907 49.4061 49.9486 49.3592C50.8354 49.0957 51.424 48.2645 51.846 47.4413C52.1278 46.8916 52.3728 46.2907 52.3185 45.6753C52.2642 45.06 51.8219 44.4401 51.2074 44.3774C50.7007 44.3256 50.2329 44.6474 49.8675 45.0021C48.9456 45.9024 48.3531 47.0865 48.1852 48.3641C48.105 48.9897 48.128 49.6324 47.9578 50.2398C47.5945 51.5367 46.4576 52.3318 45.8911 53.4988C45.2668 54.7846 45.6114 56.2444 46.3698 57.3822Z" fill="#FFB8B8"/>
                                        <path d="M63.0992 52.4275C62.9699 52.7283 62.7816 53.0001 62.5456 53.227C62.3095 53.4538 62.0304 53.631 61.7247 53.7482C61.3448 53.9008 60.9256 53.9265 60.5299 53.8214C60.3337 53.767 60.1526 53.668 60.0008 53.5322C59.849 53.3964 59.7305 53.2275 59.6546 53.0385C59.5941 52.8481 59.5609 52.6501 59.556 52.4504C59.4992 51.5759 59.5211 50.6747 59.8388 49.8578C59.9613 49.5428 60.1265 49.244 60.2232 48.9201C60.3183 48.546 60.3669 48.1617 60.368 47.7757L60.4724 45.3895C60.4897 45.2162 60.4777 45.0413 60.437 44.872C60.3328 44.5268 60.0101 44.3024 59.714 44.0965C58.999 43.5992 58.2924 43.0189 57.9459 42.2198C57.8268 41.9793 57.7842 41.708 57.8237 41.4425C57.9214 40.9687 58.3996 40.6619 58.8722 40.5586C59.1814 40.4909 59.5012 40.4866 59.8121 40.5459C60.1231 40.6051 60.4188 40.7267 60.6816 40.9033C60.9443 41.0799 61.1685 41.3078 61.3408 41.5734C61.5131 41.839 61.6298 42.1367 61.684 42.4486C61.7307 42.7179 61.7301 42.9929 61.7575 43.2649C61.8155 43.8417 61.9987 44.3978 62.1132 44.9662C62.3954 46.3661 62.2492 47.8133 62.5283 49.213C62.7616 50.3834 63.6414 51.147 63.0992 52.4275Z" fill="#FFB8B8"/>
                                        <path d="M9.26308 67.0219L9.06308 67.018C9.14043 64.7943 9.3777 62.579 9.77304 60.3893C10.6379 55.7012 12.076 52.6222 14.0474 51.2381L14.1622 51.4017C9.55702 54.6351 9.26542 66.8984 9.26308 67.0219Z" fill="#2F2E41"/>
                                        <path d="M11.7631 66.9741L11.5631 66.9702C11.5674 66.7487 11.6924 61.5287 13.7474 60.0859L13.8622 60.2496C11.8901 61.6342 11.7641 66.9208 11.7631 66.9741Z" fill="#2F2E41"/>
                                        <path d="M15.3 51.4199C15.8523 51.4199 16.3 50.9722 16.3 50.4199C16.3 49.8676 15.8523 49.4199 15.3 49.4199C14.7477 49.4199 14.3 49.8676 14.3 50.4199C14.3 50.9722 14.7477 51.4199 15.3 51.4199Z" fill="#6C63FF"/>
                                        <path d="M14.8048 60.0199C15.3571 60.0199 15.8048 59.5722 15.8048 59.0199C15.8048 58.4676 15.3571 58.0199 14.8048 58.0199C14.2525 58.0199 13.8048 58.4676 13.8048 59.0199C13.8048 59.5722 14.2525 60.0199 14.8048 60.0199Z" fill="#6C63FF"/>
                                        <path d="M11.297 52.0194C11.4849 53.2198 10.9951 54.2934 10.9951 54.2934C10.9951 54.2934 10.2005 53.4208 10.0126 52.2204C9.82467 51.02 10.3145 49.9464 10.3145 49.9464C10.3145 49.9464 11.109 50.819 11.297 52.0194Z" fill="#2F2E41"/>
                                        <path d="M14.5657 54.9347C13.4164 55.329 12.2738 55.0337 12.2738 55.0337C12.2738 55.0337 12.9946 54.0993 14.1439 53.7051C15.2932 53.3108 16.4358 53.6061 16.4358 53.6061C16.4358 53.6061 15.715 54.5405 14.5657 54.9347Z" fill="#2F2E41"/>
                                        <path d="M14.6026 62.5509C14.0824 62.7143 13.5285 62.7382 12.9962 62.6203C13.3341 62.1899 13.7894 61.8665 14.3069 61.689C14.8245 61.5115 15.3824 61.4874 15.9134 61.6196C15.5655 62.0395 15.1135 62.3606 14.6026 62.5509V62.5509Z" fill="#2F2E41"/>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d" x="0" y="0" width="110" height="81.42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                    <clipPath id="clip0">
                                        <rect x="4" width="102" height="73.42" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        {/*<img*/}
                        {/*    className="articles__wrapper"*/}
                        {/*    src={getArticles}*/}
                        {/*    alt=""*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="wrapper__text-container">
                        <div className="wrapper__text">
                            <div className="wording">
                                <h1>LISTICLE</h1>
                                <div>
                                    <h3>Where writers meet readers</h3>
                                </div>
                            </div>
                            <div className="aside__login-button">
                                <h3>
                                    {props.auth.isAuthenticated ? (
                                        <div>
                                            <div>
                                                <button
                                                    className="btn btn-outline-primary my-2 my-sm-0 create__article-button"
                                                    type="submit"
                                                >
                                                    <Link
                                                        to="/article"
                                                        className="authentication__register--link"
                                                    >
                                                        {' '}
                                                        <span className="small-font">
                                                            Start Writing
                                                        </span>
                                                    </Link>
                                                </button>
                                            </div>
                                            <div>
                                                <Link to="/article">
                                                    <span>
                                                        <i className="fa fa-pencil create-article-favicon" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            className="btn btn-outline-primary my-2 my-sm-0 create__article-button"
                                            type="submit"
                                        >
                                            <Link
                                                to="/login"
                                                className="authentication__login--link"
                                            >
                                                {' '}
                                                <span className="small-font">
                                                    Start Reading
                                                </span>
                                            </Link>
                                        </button>
                                    )}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="labels__row"></div>
            </div>
        </div>
    );
};

export default GetArticlesWrapper;
