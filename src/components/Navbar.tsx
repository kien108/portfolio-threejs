import { close, logo, menu } from '@/assets'
import { navLinks } from '@/constants/mock_data.constant'
import { styles } from '@/constants/style.constant'
import { useToggle } from '@/hooks'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [toggleMenu, setToggleMenu] = useToggle(false)

  const active = useMemo(() => location.hash.split('#')[1], [location.hash])

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full
        flex
        items-center
        py-5
        fixed
        top-0
        z-20
        bg-primary
      `}
    >
      <div className='w-full flex justify-between items-center container'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white cursor-pointer text-[18px] font-bold'>Kien108</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={`/#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggleMenu ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={setToggleMenu}
          />

          <div
            className={`${
              !toggleMenu ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex md:hidden flex-col gap-4 justify-end items-start'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <Link to={`/#${link.id}`} onClick={setToggleMenu}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
