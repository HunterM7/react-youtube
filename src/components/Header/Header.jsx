import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Avatar from '@mui/material/Avatar'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__main}>
				<button
					className={styles.header__burger}
					onClick={() => console.log('Burger button clicked')}
				>
					<MenuIcon />
				</button>
				<button
					className={styles.header__logo}
					onClick={() => console.log('Clicked YouTube logo')}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1000 220'
						fill='none'
					>
						<path
							d='M126 162C115.5 156.5 117.5 70.5 123 60C128.5 49.5 214 97.0001 214.5 109.5C215 122 136.5 167.5 126 162Z'
							fill='white'
						/>
						<path
							d='M166.502 220.056L101.077 218.859C79.8939 218.442 58.6582 219.275 37.891 214.955C6.29786 208.501 4.05979 176.856 1.71762 150.311C-1.50936 112.993 -0.260203 74.9977 5.82942 37.9915C9.2646 17.2243 22.7971 4.83683 43.7204 3.48358C114.35 -1.40895 185.447 -0.836416 255.921 1.4537C263.363 1.66189 270.858 2.80695 278.197 4.10815C314.423 10.458 315.307 46.3192 317.65 76.507C319.992 107.007 319.003 137.664 314.527 167.956C310.935 193.043 304.065 214.07 275.074 216.1C238.745 218.755 203.248 220.888 166.814 220.212C166.814 220.056 166.606 220.056 166.502 220.056ZM128.038 156.557C155.416 140.838 182.272 125.38 209.494 109.766C182.064 94.0473 155.259 78.589 128.038 62.9745V156.557Z'
							fill='#FF0000'
						/>
						<path
							d='M844.116 191.533C842.867 196.634 841.774 200.642 840.681 204.91H815.073V7.38718H844.949V80.2545C846.51 78.2767 847.291 77.4439 847.968 76.5591C853.068 69.5326 859.678 64.9524 868.214 63.1827C881.799 60.5283 893.406 66.5138 897.517 79.5779C900.172 87.6974 901.889 96.3894 902.098 104.873C902.514 126.681 902.202 148.438 901.421 170.246C901.109 176.908 899.079 183.726 896.528 189.972C888.149 210.583 860.771 213.706 847.187 195.853C846.354 194.76 845.573 193.563 844.116 191.533V191.533ZM845.573 137.195V173.316C845.573 179.198 848.696 182.789 854.578 184.142C860.355 185.496 865.039 183.258 867.381 177.897C868.37 175.659 869.359 173.316 869.411 170.974C869.984 148.906 870.504 126.838 870.661 104.717C870.661 100.605 869.672 96.3374 868.422 92.3297C866.08 85.095 859.626 82.961 853.276 87.1769C848.488 90.4039 845.573 94.9841 845.573 101.074V137.195ZM764.378 65.9933H795.659V205.014H771.249C770.364 199.757 769.479 194.344 768.438 187.994C766.773 190.44 765.784 192.002 764.743 193.563C756.623 205.274 745.121 209.282 731.536 207.148C719.929 205.274 712.955 196.322 711.393 181.644C710.925 177.272 710.717 172.848 710.717 168.476C710.613 135.946 710.717 103.312 710.717 70.7818V65.8892H742.362V71.5625C742.362 103 742.258 134.385 742.466 165.822C742.466 170.298 742.935 174.93 743.715 179.406C744.6 183.986 747.931 185.652 752.407 185.34C759.642 184.767 764.639 179.406 764.639 172.223V72.135C764.378 70.1051 764.378 68.2314 764.378 65.9933V65.9933ZM549.003 65.8892H580.44V71.7707C580.44 103.052 580.336 134.28 580.544 165.457C580.544 169.933 580.961 174.566 581.898 178.938C583.095 184.09 586.114 185.756 591.266 185.079C598.397 184.09 602.717 179.146 602.769 171.911V72.3432V66.0974H634.05V205.014H609.743C608.859 199.861 607.974 194.552 606.829 187.838C605.267 190.18 604.382 191.533 603.498 192.939C595.378 204.858 583.98 209.23 570.083 207.096C558.945 205.43 552.126 197.207 550.044 183.726C549.472 179.51 549.055 175.346 549.055 171.13C548.951 137.351 548.951 103.416 548.951 69.6367L549.003 65.8892ZM532.868 140.11C532.764 144.794 532.452 149.478 532.192 154.163C530.995 168.216 530.422 188.15 519.076 198.404C511.841 204.858 502.68 207.2 493.208 207.512C488.992 207.616 484.724 207.616 480.508 207.044C460.574 204.025 451.309 195.229 447.978 173.316C444.178 148.021 443.866 122.309 448.394 97.014C453.079 70.8338 469.214 61.5692 494.301 63.2868C517.722 64.9524 528.184 80.3066 530.943 102.167C532.452 114.71 533.181 127.41 532.868 140.11V140.11ZM501.015 135.321C501.015 126.421 501.223 117.469 500.911 108.569C500.703 103.416 500.026 98.2111 498.933 93.1104C497.684 87.2289 493.936 84.4184 489.252 84.5224C484.672 84.6265 481.445 87.4371 479.779 92.9022C479.207 94.9321 478.582 97.014 478.582 99.0439C478.582 112.993 478.478 126.994 478.374 140.943C478.27 153.955 476.604 167.591 480.716 180.031C481.965 183.83 485.192 185.912 489.408 185.912C493.52 185.912 496.227 183.882 497.736 180.239C498.933 177.428 499.974 174.357 499.974 171.339C500.338 159.368 501.015 147.345 501.015 135.321ZM402.072 109.141C404.83 95.6607 407.432 82.4926 410.295 69.2724C413.886 52.4608 417.894 35.6493 421.433 18.7857C422.318 14.6739 423.984 13.685 427.887 13.7891C436.267 14.1014 444.803 13.8932 453.755 13.8932C450.841 24.6151 447.978 34.8165 445.167 44.8618C436.267 76.4029 427.367 108.048 418.571 139.693C417.894 142.14 417.582 144.794 417.582 147.397C417.478 164.677 417.582 181.904 417.582 199.184V204.806H387.03C386.926 203.244 386.717 201.683 386.717 200.121C386.717 190.336 385.937 180.499 386.821 170.818C389.06 147.553 381.669 126.161 375.683 104.509C367.772 75.8825 359.756 47.1519 351.845 18.5255C351.429 17.1722 351.273 15.7149 350.856 14.0493H382.033C388.591 45.6425 395.201 77.2357 402.072 109.141ZM999.844 145.419H947.171C947.744 155.984 947.952 166.03 949.045 175.971C949.826 182.893 953.625 185.86 959.611 185.912C965.856 186.016 969.5 182.893 970.957 176.023C971.426 173.785 971.738 171.547 971.946 169.257C972.154 167.227 972.258 165.041 972.415 162.126C981.315 162.595 990.007 163.115 998.595 163.479C1003.59 178.313 994.587 197.363 979.441 203.244C967.522 207.928 955.291 207.928 943.111 204.337C934.107 201.683 927.393 195.957 924.374 187.161C921.564 178.938 918.909 170.35 918.337 161.762C916.775 140.578 916.203 119.186 919.43 97.9509C920.002 94.4116 920.991 91.0285 922.084 87.5933C926.456 73.4362 935.981 64.7442 950.71 63.2868C958.726 62.5061 967.002 62.8184 974.913 64.1716C987.717 66.4097 994.535 75.6222 997.502 87.6974C998.855 93.3706 999.844 99.2 1000.05 104.977C1000.1 118.25 999.844 131.418 999.844 145.419ZM969.916 127.15C969.916 116.688 970.02 106.851 969.812 96.9619C969.812 94.6198 968.927 92.1735 968.043 89.9355C966.273 85.5634 962.577 84.3663 958.153 84.3663C953.729 84.3663 950.919 86.6044 949.826 90.6121C946.495 102.635 947.588 114.919 947.692 127.254C955.655 127.15 962.89 127.15 969.916 127.15V127.15Z'
							fill='white'
						/>
						<path
							d='M658.2 39.3967H627.231V14.3096H719.669V39.2406H688.908V204.806H658.252L658.2 39.3967Z'
							fill='white'
						/>
					</svg>
				</button>
			</div>
			<div
				className={`
				${styles.header__searchbar}
				${styles.searchbar}
			`}
			>
				<input type='text' placeholder='Search' />
				<button className={styles.searchbar__btn}>
					<SearchIcon />
				</button>
			</div>
			<div className={styles.header__buttons}>
				<button>
					<VideoCallIcon />
				</button>
				<button>
					<NotificationsNoneIcon />
				</button>
				<button>
					<Avatar
						alt='Anton Meshchaninov'
						src='https://avatars.mds.yandex.net/get-yapic/24700/enc-67536c52eb5ee5cbb13dfe3984b9309b4a1d83d40d3579984c38a1f9e4ccfe5a/islands-200'
					/>
				</button>
			</div>
		</header>
	)
}

export default Header