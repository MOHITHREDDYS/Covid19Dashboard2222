import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Hamburger from '../Hamburger'
import CovidContext from '../../context/CovidContext'

import './index.css'
import StateTabs from '../StateTabs'
import BarChartFigure from '../BarChart'
import DailySpreadTrend from '../DailySpreadTrend'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const stateTabs = [
  {
    id: 'CONFIRMED',
    displayText: 'Confirmed',
    bgColor: 'color-1',
    color: 'confirmed',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="total-icon"
      >
        <path
          d="M12.0001 0.000976562C5.3832 0.000976562 0 5.3841 0 12.0009C0 18.6177 5.3832 24.0008 12.0001 24.0008C18.6169 24.0008 24 18.6177 24 12.0009C24 5.3841 18.6169 0.000976562 12.0001 0.000976562ZM12.0001 22.0336C6.46792 22.0336 1.9672 17.5331 1.9672 12.0009C1.9672 6.46881 6.46792 1.96818 12.0001 1.96818C17.5322 1.96818 22.0328 6.46881 22.0328 12.0009C22.0328 17.5331 17.5322 22.0336 12.0001 22.0336Z"
          fill="#FF073A"
        />
        <path
          d="M17.1905 7.39431L10.0657 14.5193L6.80813 11.2617C6.42398 10.8777 5.80124 10.8777 5.41709 11.2617C5.03301 11.6459 5.03301 12.2686 5.41709 12.6528L9.37013 16.6058C9.56221 16.7978 9.81394 16.8939 10.0657 16.8939C10.3174 16.8939 10.5691 16.7978 10.7612 16.6058L18.5816 8.78544C18.9657 8.40128 18.9657 7.77854 18.5816 7.39439C18.1974 7.01023 17.5746 7.01023 17.1905 7.39431Z"
          fill="#FF073A"
        />
      </svg>
    ),
  },
  {
    id: 'ACTIVE',
    displayText: 'Active',
    bgColor: 'color-2',
    color: 'active',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="total-icon"
      >
        <g clipPath="url(#clip0_9848_9409)">
          <path
            d="M0.77 15C0.541 15 0.335 14.842 0.283 14.61C0.095 13.778 0 12.9 0 12C0 5.383 5.383 0 12 0C15.8 0 19.409 1.83 21.653 4.895C21.816 5.118 21.768 5.431 21.545 5.594C21.322 5.757 21.009 5.709 20.846 5.486C18.79 2.677 15.482 1 12 1C5.935 1 1 5.935 1 12C1 12.827 1.087 13.631 1.258 14.39C1.319 14.66 1.15 14.927 0.88 14.988C0.843 14.996 0.806 15 0.77 15Z"
            fill="#007BFF"
          />
          <path
            d="M11.9996 24C8.19962 24 4.59062 22.17 2.34662 19.105C2.18362 18.882 2.23162 18.569 2.45462 18.406C2.67662 18.242 2.98962 18.291 3.15362 18.514C5.20962 21.323 8.51762 23 11.9996 23C18.0646 23 22.9996 18.065 22.9996 12C22.9996 11.162 22.9106 10.359 22.7336 9.61604C22.6696 9.34704 22.8356 9.07704 23.1046 9.01404C23.3756 8.94904 23.6436 9.11604 23.7066 9.38504C23.9006 10.204 23.9996 11.084 23.9996 12C23.9996 18.617 18.6166 24 11.9996 24Z"
            fill="#007BFF"
          />
          <path
            d="M2.54981 22C2.27781 22 2.05481 21.782 2.04981 21.508L1.99981 18.508C1.99781 18.374 2.04881 18.245 2.14381 18.149C2.23681 18.054 2.36581 18 2.49981 18H5.49981C5.77581 18 5.99981 18.224 5.99981 18.5C5.99981 18.776 5.77581 19 5.49981 19H3.00781L3.04981 21.492C3.05481 21.768 2.83481 21.995 2.55881 22C2.55581 22 2.55281 22 2.54981 22Z"
            fill="#007BFF"
          />
          <path
            d="M21.5 6.00012H18.5C18.224 6.00012 18 5.77612 18 5.50012C18 5.22412 18.224 5.00012 18.5 5.00012H21V2.50012C21 2.22412 21.224 2.00012 21.5 2.00012C21.776 2.00012 22 2.22412 22 2.50012V5.50012C22 5.77612 21.776 6.00012 21.5 6.00012Z"
            fill="#007BFF"
          />
          <path
            d="M12 20.0002C11.934 20.0002 11.868 19.9872 11.806 19.9602C11.568 19.8612 6 17.4543 6 12.5363V8.35725C6 8.14325 6.137 7.95225 6.34 7.88325L11.84 6.02625C11.944 5.99125 12.056 5.99125 12.16 6.02625L17.66 7.88325C17.863 7.95225 18 8.14325 18 8.35725V12.5363C18 17.4543 12.432 19.8612 12.194 19.9613C12.132 19.9873 12.066 20.0002 12 20.0002ZM7 8.71625V12.5363C7 16.3212 11.055 18.4943 12 18.9503C12.944 18.4933 17 16.3123 17 12.5363V8.71625L12 7.02825L7 8.71625Z"
            fill="#007BFF"
          />
          <path
            d="M11.5002 15.0002C11.4912 15.0002 11.4812 15.0002 11.4722 14.9992C11.3302 14.9912 11.1982 14.9232 11.1092 14.8122L9.10921 12.3122C8.93721 12.0962 8.97221 11.7823 9.18721 11.6093C9.40321 11.4373 9.71821 11.4723 9.89021 11.6873L11.5412 13.7512L14.6462 10.6462C14.8412 10.4513 15.1582 10.4513 15.3532 10.6462C15.5482 10.8412 15.5482 11.1582 15.3532 11.3532L11.8532 14.8532C11.7602 14.9482 11.6322 15.0002 11.5002 15.0002Z"
            fill="#007BFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_9848_9409">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 'RECOVERED',
    displayText: 'Recovered',
    bgColor: 'color-3',
    color: 'recovered',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="total-icon"
      >
        <path
          d="M18.9636 13.7307C18.6956 13.7308 18.4313 13.7941 18.1924 13.9155C17.9534 14.037 17.7466 14.2131 17.5886 14.4296C17.4307 14.2128 17.2238 14.0364 16.9848 13.9147C16.7457 13.7931 16.4813 13.7297 16.2131 13.7296C15.647 13.7296 15.1857 13.9629 14.8793 14.4042C14.641 14.7474 14.5098 15.2058 14.5098 15.6945C14.5098 17.8054 17.2917 19.6301 17.4101 19.707C17.4633 19.7414 17.5254 19.7597 17.5888 19.7596C17.6523 19.7595 17.7143 19.741 17.7674 19.7064C17.8858 19.6293 20.6669 17.7931 20.6669 15.6943C20.6667 14.7424 20.07 13.7307 18.9636 13.7307ZM17.5878 19.0318C16.9998 18.61 15.166 17.1747 15.166 15.6943C15.166 15.4758 15.2165 14.3857 16.2131 14.3857C16.4908 14.3861 16.7571 14.4967 16.9534 14.6932C17.1497 14.8896 17.26 15.1559 17.2602 15.4337C17.2602 15.5207 17.2948 15.6041 17.3563 15.6657C17.4178 15.7272 17.5013 15.7618 17.5883 15.7618C17.6754 15.7618 17.7588 15.7272 17.8203 15.6657C17.8819 15.6041 17.9165 15.5207 17.9165 15.4337C17.9168 15.1561 18.0273 14.89 18.2236 14.6937C18.4199 14.4975 18.686 14.3871 18.9636 14.3868C19.7264 14.3868 20.0107 15.1886 20.0107 15.6941C20.0105 17.1656 18.1757 18.6077 17.5878 19.0318Z"
          fill="#28A745"
        />
        <path
          d="M17.5889 11.2192C16.5537 11.2201 15.5395 11.5114 14.6617 12.0601C13.7838 12.6087 13.0775 13.3927 12.6231 14.3228C12.5724 14.307 12.5234 14.2915 12.477 14.2765L12.0634 13.3453C13.041 12.6043 13.3095 11.4554 13.3829 10.8981C14.0475 10.7183 14.6582 9.93713 14.9029 8.90213C15.0345 8.34282 14.8417 7.82218 14.423 7.60641C14.3067 7.54608 14.1775 7.51488 14.0464 7.51547C14.0682 7.35272 14.0908 7.15355 14.1143 6.90872C14.169 6.33783 14.2039 5.76122 14.2039 5.61497C14.2039 5.00372 13.9957 4.07611 13.4117 3.30577C12.4396 2.02402 10.9055 1.755 9.7897 1.755C8.69217 1.755 7.167 2.00597 6.13387 3.20152C5.3205 4.14277 5.14369 5.29215 5.22323 5.83519C5.22614 5.85483 5.24362 5.94736 5.27156 6.0855C5.27306 6.10368 5.27607 6.12169 5.28056 6.13936C5.28131 6.14218 5.28361 6.15066 5.28736 6.16313C5.35889 6.51165 5.48095 7.0725 5.60709 7.53657C5.49294 7.54651 5.38209 7.58003 5.28155 7.635C4.87964 7.85222 4.69537 8.36157 4.82297 8.90232C5.06798 9.93924 5.68045 10.7211 6.34641 10.8992C6.42483 11.4408 6.69722 12.5638 7.63078 13.3058L7.18955 14.2569C6.87745 14.3544 6.53433 14.4501 6.17105 14.5505C3.94148 15.1669 0.890625 16.0111 0.890625 18.8193V20.8443C0.890625 21.5305 1.77131 22.2656 2.39484 22.2656H17.3606C17.4364 22.2687 17.5124 22.2706 17.5889 22.2706C18.3159 22.2728 19.0361 22.1314 19.7084 21.8547C20.3807 21.5779 20.9917 21.1712 21.5066 20.6579C22.0214 20.1446 22.4298 19.5347 22.7086 18.8632C22.9873 18.1918 23.1307 17.4719 23.1307 16.7449C23.1307 16.0179 22.9873 15.298 22.7086 14.6266C22.4298 13.9551 22.0214 13.3452 21.5066 12.8319C20.9917 12.3186 20.3807 11.9119 19.7084 11.6352C19.0361 11.3584 18.3159 11.217 17.5889 11.2192ZM6.63019 3.63085C7.32933 2.82174 8.39226 2.41149 9.78956 2.41149C11.1963 2.41149 12.239 2.84588 12.8887 3.70257C13.1206 4.01073 13.2955 4.35784 13.4053 4.72754C13.1105 4.40788 12.7695 4.13411 12.3937 3.91533C12.3504 3.89099 12.3021 3.87689 12.2524 3.87412C12.2028 3.87135 12.1532 3.87999 12.1074 3.89936C12.0616 3.91873 12.0209 3.94832 11.9883 3.98588C11.9557 4.02343 11.9322 4.06794 11.9195 4.116C11.9157 4.12913 11.5117 5.44411 8.96166 6.59729C8.0077 7.02854 7.23891 7.11361 6.67645 6.84971C6.49706 6.76257 6.33714 6.64004 6.20631 6.48951C6.07548 6.33898 5.97645 6.16354 5.91516 5.97375L5.91478 5.97254C5.89448 5.87171 5.87962 5.79094 5.87217 5.74027C5.75564 4.94415 6.33253 3.97529 6.63019 3.63085ZM6.9727 10.596C6.96875 10.5114 6.93252 10.4316 6.87147 10.373C6.81041 10.3144 6.7292 10.2815 6.64458 10.281H6.63145C6.23958 10.281 5.67839 9.66994 5.46136 8.75152C5.39409 8.46638 5.48259 8.27218 5.59331 8.21246C5.71875 8.14468 5.85225 8.26369 5.90381 8.31807C5.9608 8.37821 6.03843 8.41457 6.12111 8.41984C6.2038 8.42511 6.28542 8.39891 6.34958 8.3465C6.41375 8.29408 6.45571 8.21933 6.46704 8.13726C6.47837 8.05518 6.45823 7.97186 6.41067 7.90402C6.37083 7.83024 6.30755 7.62155 6.23822 7.35999C6.28509 7.38732 6.33403 7.41343 6.38536 7.43794C6.70287 7.5858 7.04966 7.66006 7.39987 7.65521C7.9417 7.65521 8.55436 7.50174 9.23212 7.19522C11.254 6.28083 12.067 5.24311 12.3769 4.68704C12.5264 4.79626 12.6678 4.91611 12.8001 5.04568C13.2601 5.49825 13.4941 5.97085 13.4962 6.45043C13.4476 7.04363 13.3725 7.74741 13.3056 7.91827C13.2618 7.98815 13.2459 8.07197 13.2611 8.15305C13.2762 8.23413 13.3214 8.30651 13.3876 8.35578C13.4537 8.40505 13.536 8.4276 13.618 8.41894C13.7001 8.41027 13.7758 8.37103 13.8302 8.30902C13.8912 8.23965 14.01 8.13207 14.1224 8.18991C14.2438 8.25244 14.3314 8.46558 14.2641 8.75152C14.0457 9.67557 13.4792 10.2878 13.0871 10.2811C13.0006 10.2794 12.917 10.312 12.8544 10.3717C12.7918 10.4314 12.7553 10.5134 12.7528 10.5998C12.7387 10.8698 12.6105 12.2521 11.4828 12.9492C11.0453 13.2194 10.5002 13.3563 9.86273 13.3563C9.22744 13.3563 8.68378 13.2164 8.24672 12.9402C7.13906 12.2409 6.99112 10.8647 6.9727 10.596ZM7.7243 14.6639L8.19066 13.6584C8.67314 13.8934 9.23381 14.0126 9.86278 14.0126C10.4752 14.0126 11.0227 13.9024 11.496 13.6848L11.9363 14.6758C11.9547 14.7173 11.9816 14.7545 12.0152 14.7851C12.0487 14.8157 12.0883 14.839 12.1313 14.8535C12.2061 14.8787 12.2848 14.9043 12.3693 14.931C12.3168 15.0816 12.2708 15.2351 12.2311 15.3913C11.8745 16.0422 11.049 16.7869 9.86278 16.7869C8.31502 16.7869 7.53103 15.5716 7.37348 14.8869C7.42575 14.8707 7.47745 14.8541 7.52817 14.8378C7.57106 14.8239 7.61062 14.8012 7.64436 14.7713C7.67811 14.7413 7.70532 14.7048 7.7243 14.6639ZM2.39484 21.6093C2.08383 21.6093 1.54687 21.1231 1.54687 20.8443V18.8193C1.54687 17.7933 2.03039 17.0229 3.07416 16.3949C4.01887 15.8264 5.25384 15.4846 6.34462 15.183C6.48056 15.1455 6.61275 15.1086 6.74306 15.072C6.98892 16.0702 8.04951 17.4431 9.86302 17.4431C10.6734 17.4448 11.4565 17.1502 12.0649 16.6148C12.0638 16.658 12.0631 16.7014 12.0631 16.7449C12.0638 17.7425 12.3343 18.7213 12.8459 19.5776C13.3576 20.434 14.0913 21.136 14.9694 21.6093H2.39484ZM17.5889 21.6144H17.581C17.5628 21.6112 17.5444 21.6095 17.526 21.6094H17.3719C16.0924 21.551 14.8877 20.9903 14.019 20.0492C13.1504 19.108 12.6879 17.8622 12.7321 16.5822C12.7763 15.3022 13.3234 14.0912 14.2549 13.2121C15.1863 12.333 16.4269 11.8567 17.7073 11.8866C18.9877 11.9165 20.2047 12.4501 21.0941 13.3717C21.9835 14.2933 22.4736 15.5285 22.458 16.8091C22.4424 18.0898 21.9224 19.3127 21.0108 20.2123C20.0992 21.112 18.8696 21.6158 17.5888 21.6145L17.5889 21.6144Z"
          fill="#28A745"
        />
      </svg>
    ),
  },
  {
    id: 'DECEASED',
    displayText: 'Deceased',
    color: 'deceased',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="total-icon"
      >
        <path
          d="M19.2754 14.7082L18.8136 13.0827C21.8158 5.61159 19.0761 0.372603 16.2971 0.774697C15.4212 -0.140725 14.1558 -0.24385 12.4381 0.458572C11.9792 0.646072 12.2623 1.34076 12.7219 1.15279C15.5484 -0.00286546 15.6422 1.69579 16.2477 1.54771C18.6794 0.951603 20.7272 6.16068 18.1757 12.6583C16.1314 12.3747 15.9862 11.0646 15.459 11.5887C15.3885 11.6588 15.3487 11.754 15.3484 11.8535C15.3481 11.9529 15.3874 12.0484 15.4575 12.119C16.1719 12.8377 17.0689 13.2699 18.1262 13.4075L18.5262 14.8154C15.1831 17.9432 13.5883 17.5358 13.9049 18.2958C13.9238 18.3412 13.9515 18.3825 13.9864 18.4173C14.0213 18.452 14.0627 18.4796 14.1083 18.4983C14.1538 18.5171 14.2026 18.5267 14.2518 18.5266C14.3011 18.5265 14.3498 18.5167 14.3953 18.4977C16.4959 17.6226 18.3333 16.0204 18.9742 15.4244C24.8268 20.0305 22.4125 23.9999 23.6261 23.9999C23.7255 23.9999 23.8209 23.9604 23.8912 23.8901C23.9615 23.8197 24.0011 23.7244 24.0011 23.6249C24.0011 19.6954 22.3265 17.0593 19.2754 14.7082Z"
          fill="#6C757D"
        />
        <path
          d="M16.3639 8.57774C15.7148 6.29291 13.1905 7.01366 13.7364 8.93446C13.8719 9.41136 14.5935 9.20703 14.4578 8.72942C14.1793 7.74894 15.2732 7.48293 15.6425 8.78272C15.8663 9.5705 15.7553 10.31 14.9703 10.5331C14.4929 10.6687 14.6979 11.39 15.1753 11.2545C16.3677 10.9157 16.7093 9.79339 16.3639 8.57774Z"
          fill="#6C757D"
        />
        <path
          d="M13.2305 15.3858C13.6153 16.4733 13.5385 17.2474 14.1037 17.0869C14.151 17.0735 14.1953 17.0508 14.2339 17.0202C14.2725 16.9897 14.3047 16.9518 14.3287 16.9088C14.3527 16.8658 14.368 16.8185 14.3737 16.7696C14.3793 16.7206 14.3753 16.6711 14.3619 16.6237L13.8494 14.8201C13.8359 14.7727 13.8133 14.7285 13.7827 14.6899C13.7522 14.6512 13.7143 14.619 13.6713 14.595C13.6283 14.5711 13.5809 14.5558 13.532 14.5501C13.4831 14.5444 13.4336 14.5484 13.3862 14.5619C10.8216 15.2093 10.5409 15.5669 9.96806 15.2476C9.86033 15.1879 9.7655 15.1075 9.68907 15.0109C9.61263 14.9144 9.5561 14.8036 9.52275 14.6851C9.04701 13.2085 9.15009 12.9014 8.80261 12.8034L7.82798 12.5286C8.60104 10.368 8.64707 11.7399 7.86548 8.85253C9.00539 8.95181 9.66698 8.54274 12.6233 7.76166C13.101 7.62595 12.8952 6.90469 12.4183 7.04025L9.06253 7.9936C6.90787 8.56495 5.55211 7.02047 4.82034 4.93608C6.13523 5.2057 7.71722 4.03908 10.1356 2.54433C10.5578 2.28342 10.1632 1.6456 9.74123 1.90641C7.39434 3.357 5.37445 4.83708 4.49831 3.97594C4.25428 3.69328 3.77456 3.91725 3.85584 4.30716C4.20712 5.99231 5.31065 8.0625 7.03481 8.67319L7.67147 10.9138C6.71611 13.4352 6.49022 12.8645 8.39718 13.4681C8.77317 14.4938 8.6864 15.3917 9.60267 15.9025C9.79601 16.011 10.009 16.0801 10.2292 16.1057C10.4494 16.1313 10.6725 16.113 10.8856 16.0518L13.2305 15.3858Z"
          fill="#6C757D"
        />
        <path
          d="M18.7278 17.6157C18.3831 17.617 18.0419 17.6862 17.724 17.8193C17.406 17.9525 17.1173 18.1471 16.8745 18.3918C16.6318 18.6366 16.4396 18.9269 16.3091 19.2459C16.1786 19.565 16.1122 19.9067 16.1138 20.2515L16.1263 23.6265C16.1281 24.1265 16.8781 24.1219 16.8763 23.6237L16.8638 20.2487C16.8617 19.7514 17.0572 19.2736 17.4074 18.9205C17.7576 18.5674 18.2336 18.3679 18.7309 18.3658C19.2282 18.3637 19.7059 18.5592 20.0591 18.9094C20.4122 19.2595 20.6117 19.7356 20.6138 20.2329L20.6263 23.6079C20.6266 23.7071 20.6663 23.8022 20.7366 23.8722C20.8069 23.9422 20.902 23.9815 21.0013 23.9815C21.006 23.9794 21.3776 23.965 21.3763 23.6051L21.3638 20.2301C21.3601 19.5341 21.0806 18.868 20.5864 18.3779C20.0922 17.8878 19.4238 17.6137 18.7278 17.6157Z"
          fill="#6C757D"
        />
        <path
          d="M12.8071 19.9337L12.7701 19.8449C13.0203 18.4492 13.5784 17.7359 12.9892 16.9814C12.6489 16.5454 11.8267 16.2714 11.6501 16.7427C10.4756 19.9314 10.471 19.7602 10.5085 19.9479C11.3069 23.3809 11.071 23.9995 11.6259 23.9994C11.6814 23.9994 11.7362 23.9872 11.7864 23.9635C11.8366 23.9398 11.881 23.9052 11.9162 23.8623C11.9514 23.8193 11.9766 23.7691 11.9901 23.7153C12.0036 23.6614 12.0049 23.6052 11.994 23.5508L11.2649 19.9057L12.2389 17.3086C12.7545 17.5852 12.3859 18.0641 12.0125 19.7836C11.9596 19.9945 12.0359 19.9687 12.78 21.8215C12.8133 21.9016 12.8734 21.9676 12.9499 22.0084C13.0264 22.0492 13.1147 22.0622 13.1997 22.0452C13.6948 21.9463 13.4275 21.3172 13.5013 20.3433C13.5013 19.7134 14.2513 19.7131 14.2513 20.3433C14.2513 22.5947 14.342 22.6284 13.6111 23.3594C13.2605 23.7099 13.7903 24.2406 14.1414 23.8897C15.1266 22.9044 15.0013 22.5338 15.0013 20.3431C15.0013 18.8827 13.1612 18.7241 12.8071 19.9337Z"
          fill="#6C757D"
        />
        <path
          d="M9.75102 12.3748C10.2468 12.3748 10.2475 11.6248 9.75102 11.6248C9.25522 11.6248 9.25452 12.3748 9.75102 12.3748Z"
          fill="#6C757D"
        />
        <path
          d="M0.376018 14.9998C-0.119779 14.9998 -0.120482 15.7498 0.376018 15.7498C0.872518 15.7498 0.872518 14.9998 0.376018 14.9998Z"
          fill="#6C757D"
        />
        <path
          d="M1.87628 15.7498C2.37208 15.7498 2.37278 14.9998 1.87628 14.9998C1.37978 14.9998 1.37978 15.7498 1.87628 15.7498Z"
          fill="#6C757D"
        />
        <path
          d="M3.37602 15.7498C3.87181 15.7498 3.87252 14.9998 3.37602 14.9998C2.88022 14.9998 2.87952 15.7498 3.37602 15.7498Z"
          fill="#6C757D"
        />
        <path
          d="M7.50098 16.8748C7.50098 17.3706 8.25098 17.3713 8.25098 16.8748C8.25098 16.3783 7.50098 16.3783 7.50098 16.8748Z"
          fill="#6C757D"
        />
        <path
          d="M11.251 12.3748C11.7468 12.3748 11.7475 11.6248 11.251 11.6248C10.7552 11.6248 10.7545 12.3748 11.251 12.3748Z"
          fill="#6C757D"
        />
        <path
          d="M16.126 15.3755C16.126 14.8797 15.376 14.879 15.376 15.3755C15.376 15.872 16.126 15.872 16.126 15.3755Z"
          fill="#6C757D"
        />
        <path
          d="M14.626 14.2498C14.626 14.7456 15.376 14.7463 15.376 14.2498C15.376 13.7533 14.626 13.7533 14.626 14.2498Z"
          fill="#6C757D"
        />
        <path
          d="M13.501 13.1248C13.501 13.6206 14.251 13.6213 14.251 13.1248C14.251 12.6283 13.501 12.6283 13.501 13.1248Z"
          fill="#6C757D"
        />
        <path
          d="M12.7513 12.7498C13.2471 12.7498 13.2478 11.9998 12.7513 11.9998C12.2548 11.9998 12.2548 12.7498 12.7513 12.7498Z"
          fill="#6C757D"
        />
        <path
          d="M11.251 1.87476C11.7468 1.87476 11.7475 1.12476 11.251 1.12476C10.7552 1.12476 10.7545 1.87476 11.251 1.87476Z"
          fill="#6C757D"
        />
        <path
          d="M3.00098 14.2498H6.37598C6.87173 14.2498 6.87248 13.4998 6.37598 13.4998H3.00098C2.80214 13.4995 2.61151 13.4204 2.47091 13.2798C2.33031 13.1392 2.25121 12.9486 2.25098 12.7498C2.25098 11.7571 3.75098 11.7583 3.75098 12.7498C3.75098 12.8492 3.79049 12.9446 3.86081 13.0149C3.93114 13.0852 4.02652 13.1248 4.12598 13.1248C4.9138 13.1248 4.43066 11.2498 3.00098 11.2498C2.60315 11.2498 2.22162 11.4078 1.94032 11.6891C1.65901 11.9704 1.50098 12.3519 1.50098 12.7498C1.50098 13.1476 1.65901 13.5291 1.94032 13.8104C2.22162 14.0917 2.60315 14.2498 3.00098 14.2498Z"
          fill="#6C757D"
        />
        <path
          d="M6.37598 16.4998H3.00098C2.70431 16.4998 2.4143 16.5877 2.16762 16.7526C1.92095 16.9174 1.72869 17.1516 1.61516 17.4257C1.50163 17.6998 1.47192 18.0014 1.5298 18.2924C1.58768 18.5834 1.73054 18.8506 1.94032 19.0604C2.1501 19.2702 2.41737 19.4131 2.70834 19.4709C2.99931 19.5288 3.30091 19.4991 3.575 19.3856C3.84909 19.272 4.08336 19.0798 4.24818 18.8331C4.413 18.5864 4.50098 18.2964 4.50098 17.9998C4.50098 17.504 3.75098 17.5033 3.75098 17.9998C3.75098 18.9924 2.25098 18.9912 2.25098 17.9998C2.25121 17.8009 2.33031 17.6103 2.47091 17.4697C2.61151 17.3291 2.80214 17.25 3.00098 17.2498H6.37598C6.87173 17.2498 6.87248 16.4998 6.37598 16.4998Z"
          fill="#6C757D"
        />
        <path
          d="M7.876 14.9998H4.876C4.38025 14.9998 4.3795 15.7498 4.876 15.7498H7.876C8.37175 15.7498 8.3725 14.9998 7.876 14.9998Z"
          fill="#6C757D"
        />
      </svg>
    ),
  },
]

class State extends Component {
  state = {
    stateName: '',
    lastUpdated: '',
    totalActive: 0,
    totalConfirmed: 0,
    totalDeceased: 0,
    totalRecovered: 0,
    districtsList: [],
    activeTab: stateTabs[0].id,
    activeColor: stateTabs[0].color,
    chartDetails: [],
  }

  componentDidMount() {
    this.getDetails()
    this.getChartDetails()
  }

  changeActiveTab = id => {
    const tab = stateTabs.filter(eachTab => eachTab.id === id)
    this.setState({activeTab: tab[0].id, activeColor: tab[0].color})
  }

  getChartDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {code} = params

    const url = `https://apis.ccbp.in/covid19-timelines-data/${code}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    const keyNames = Object.keys(data.AP.dates)

    const chartDetails = keyNames.map(date => ({
      date,
      confirmed: data.AP.dates[date].total.confirmed,
      deceased: data.AP.dates[date].total.deceased,
      recovered: data.AP.dates[date].total.recovered,
      tested: data.AP.dates[date].total.tested,
      active:
        data.AP.dates[date].total.confirmed -
        (data.AP.dates[date].total.recovered +
          data.AP.dates[date].total.deceased),
    }))

    this.setState({chartDetails})
  }

  getDetails = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'

    const {match} = this.props
    const {params} = match
    const {code} = params

    const stateName = statesList.find(
      eachState => eachState.state_code === code,
    ).state_name

    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()

      const stateFromData = data[code]
      const {districts, meta} = stateFromData
      const dateStr = new Date(meta.last_updated)

      const updatedMonth = dateStr.getMonth()

      const monthName = this.getMonthName(updatedMonth)

      const day = dateStr.getDay()
      const dayString = this.getString(day)

      const year = dateStr.getFullYear()

      const lastUpdatedDate = `${monthName} ${dayString} ${year}`

      const districtsList = this.convertObjectsDataIntoListItemsUsingForInMethod(
        districts,
      )
      this.setState({districtsList, lastUpdated: lastUpdatedDate, stateName})
      console.log(districtsList)
    }
  }

  getString = number => {
    let requiredstring
    if (number === 1) {
      requiredstring = number.toLocaleString().concat('st')
    } else if (number === 2) {
      requiredstring = number.toLocaleString().concat('nd')
    } else if (number === 3) {
      requiredstring = number.toLocaleString().concat('rd')
    } else {
      requiredstring = number.toLocaleString().concat('th')
    }

    return requiredstring
  }

  getMonthName = month => {
    const d = new Date()
    d.setMonth(month)
    const monthName = d.toLocaleString('default', {month: 'long'})
    return monthName.toLowerCase()
  }

  convertObjectsDataIntoListItemsUsingForInMethod = data => {
    const resultList = []
    // getting keys of an object object
    const keyNames = Object.keys(data)
    console.log(keyNames)

    let totalConfirmed = 0
    let totalActive = 0
    let totalRecovered = 0
    let totalDeceased = 0
    let totalTested = 0

    keyNames.forEach(keyName => {
      /* const isPresent = statesList.some(
        eachState => eachState.state_code === keyName,
      ) */

      const {total} = data[keyName]
      // if the state's covid data is available we will store it or we will store 0
      const confirmed = total.confirmed ? total.confirmed : 0
      totalConfirmed += confirmed
      const deceased = total.deceased ? total.deceased : 0
      totalDeceased += deceased
      const recovered = total.recovered ? total.recovered : 0
      totalRecovered += recovered
      totalActive += confirmed - (deceased + recovered)
      const tested = total.tested ? total.tested : 0
      totalTested += tested
      resultList.push({
        districtName: keyName,
        confirmed,
        deceased,
        recovered,
        tested,
        active: confirmed - (deceased + recovered),
      })
    })
    this.setState({
      totalActive,
      totalConfirmed,
      totalDeceased,
      totalRecovered,
      totalTested,
    })
    return resultList
  }

  render() {
    const {
      stateName,
      lastUpdated,
      totalTested,
      activeTab,
      totalRecovered,
      totalConfirmed,
      totalActive,
      totalDeceased,
      activeColor,
      districtsList,
      chartDetails,
    } = this.state
    console.log(districtsList)
    const objectKey = activeTab.toLowerCase()
    console.log(objectKey)
    const topDistricts = districtsList
      .sort((a, b) => a[objectKey] - b[objectKey])
      .reverse()
    const requiredDistricts = topDistricts.map(district => ({
      name: district.districtName,
      number: district[objectKey],
    }))
    console.log(requiredDistricts)

    return (
      <CovidContext.Consumer>
        {value => {
          const {showHamburgerItems} = value
          return (
            <div className="home-bg-container">
              <Header />
              <div className="home-container">
                {showHamburgerItems && <Hamburger />}
                {!showHamburgerItems && (
                  <>
                    <div className="state-and-total-tested-container">
                      <div>
                        <p className="state-name">{stateName}</p>
                        <p className="last-updated-date">
                          Last update on {lastUpdated}.
                        </p>
                      </div>
                      <div>
                        <p className="tested-heading">Tested</p>
                        <p className="tested-people">{totalTested}</p>
                      </div>
                    </div>
                    {/* this.showTabs() */}
                    <div className="total-list-container">
                      {stateTabs.map(eachTab => (
                        <StateTabs
                          key={eachTab.id}
                          tabDetails={eachTab}
                          activeTab={activeTab}
                          totalRecovered={totalRecovered}
                          totalConfirmed={totalConfirmed}
                          totalActive={totalActive}
                          totalDeceased={totalDeceased}
                          changeActiveTab={this.changeActiveTab}
                        />
                      ))}
                    </div>
                    <div className="top-districts-container">
                      <h1 className={`top-districts-heading ${activeColor}`}>
                        Top Districts
                      </h1>
                      <ul className="top-districts-list-container">
                        {requiredDistricts.map(district => {
                          const {name, number} = district

                          return (
                            <li className="top-district-element" key={name}>
                              <p className="top-number">{number}</p>
                              <p className="top-district">{name}</p>
                            </li>
                          )
                        })}
                      </ul>
                      <BarChartFigure
                        chartDetails={chartDetails}
                        activeTab={activeTab}
                      />
                    </div>
                    <div className="daily-spread-container">
                      <h1 className="daily-spread-heading">
                        Daily Spread Trends
                      </h1>
                      <DailySpreadTrend
                        chartDetails={chartDetails}
                        objectKey="confirmed"
                        color="#ff073a"
                        bgColor="#331427"
                      />
                    </div>
                  </>
                )}
              </div>
              {!showHamburgerItems && <Footer />}
            </div>
          )
        }}
      </CovidContext.Consumer>
    )
  }
}

export default State