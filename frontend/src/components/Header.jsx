import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-2">
        <Link to="/" className="flex items-center">
          <img
            className="h-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC40lEQVR4nO2XTUgUYRjHnxXJwraoDN3LzGKWVrobHZKYse1LMUxzLboGEYaWlzrMrEIlFUlfJhGkUQePeVjo4MxGtSprrX1u++6WiRHuxUMnCU8mT7xjs7pDgq46rfX+4Q8v77zzzP83M8/LDAATExPTfIQAFkXga1SBj1LTMZ2D5SCfaC9WBK5XFXmcaUXgBrpFuwtSVepuvkAROK8e+OkeOwYPbdVMxzNAvHQtpIqeuGxZqsC3KQI/QQP6RDsGyvLxY7UTSc0OzWG3E1+VF6CvJA4yqQp8p1LC2f5acF9pdqYqcpIqcmNa8BIe+w5uwVC1Ix7c6JDbgYHSfFTFOMi4IvIt3bvy1pgW3O+CdJ/I1aoCN6q/Fv79efj+SNGswYnBH6oc2Htg83SPCPx3ejO6y/MylhxAEbigfuEX+zbhu8rCOQcnBtNzaY3pZudemgDAB565cvF1xfakgxODaa3ne3NRFbgeMEOLFZwYbEr4fw4AW88kONl5wgDmIQbQmkIAKd7EaAEPqQGJRDXTMaAl5HYuAwA5Wgwy6QU5gokmA63Hj2GwqggXGwQWRZ5wAUjEqwdOa4ri2pvDmulYnxfqHmGnuwx/tNTi5O36FOiBc4NZIEXaQIpM0IAWTwRXtwxhTnsMbQ+mnNM+gtYbw5jmmYKwyGE82vgYw80NOH79tAZiPsD5UCbIEQkkMqbf3VVXv2D2/ZF4cKPpscxrQ2jR18shrG96iMOX6/BttRPDpgBc9KeDHKkFmYzqwTOaP+PGe99mDW40XbvyyiDC7yey3vMGT51oRH/lTvx5q36JASQS1IOvuDSIG+7OPbjR9FxaQ6+3rcGL/Yfn/n9AkgOIBNIvfMJ1d76irSO54AnuiGm1aE3H2S4TAABgwaFncU9FYVJbLCwEwHqyK8HJzlP3VRSaswvZGEAXAyCp2MQUwJRvIRsDiKUOgHW594CVAcQYAPzXTWxjADEGAExMTPAn/QIAQ7CLMv8RwAAAAABJRU5ErkJggg=="
            alt="real-estate"
          ></img>
          <p className="text-primary-400 text-2xl font-bold">Hospedix</p>
        </Link>

        <Link to="/" className="hidden lg:flex items-center rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md">
          <p className="border-r border-r-gray-300 pr-4">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 px-4">Qualquer Semana</p>
          <p className="px-4">Hóspedes</p>

          <div className="bg-primary-400 rounded-full p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>

        <Link to="/login" className="flex items-center rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md gap-2">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="sm:max-w-32 max-w-20 truncate">Gabriel XYZ Gabriel XYZ</p>

        </Link>
      </div>
    </header>
  );
};

export default Header;
