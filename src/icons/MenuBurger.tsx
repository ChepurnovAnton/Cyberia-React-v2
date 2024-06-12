const MenuBurger = (props) => {
  return (
    <svg
      {...props}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 16L28 16'
        stroke='#EEF3FF'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M4 9L28 9'
        stroke='#EEF3FF'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M4 23H28'
        stroke='#EEF3FF'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default MenuBurger
