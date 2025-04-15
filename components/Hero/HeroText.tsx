'use client'

export const HeroSecHeader = () => {
    return (
        <h3
        className="flex flex-col text-white text-center text-base md:text-lg lg:text-2xl"
        onCopy={(e) => {
          e.preventDefault();
          e.clipboardData.setData(
            "text/plain",
            "IEEE STUDENT BRANCH OF UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING PROUDLY PRESENTS",
          );
        }}
      >
        IEEE STUDENT BRANCH OF <br />
        UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING
        <br />
        PROUDLY PRESENTS
      </h3>
    )
}
