import React, { useState } from "react";
import Search from "./reuseableComponents/searchBar/Search";
import MyButton from "./reuseableComponents/button/MyButton";
import AntdCard from "./reuseableComponents/antdCard/AntdCard";
import AntdImage from "./reuseableComponents/antdImage/AntdImage";

const App = () => {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div className=" flex flex-col justify-start items-start ">
		{/* Reusable Search Input */}
      <Search
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        placeholder="Search Please"
      />
{/* Reusable Button */}
      <MyButton
        onClick={() => alert(searchProduct)}
        style={{ backgroundColor: "blue", color: "white", padding: "5px" }}
      >
        add Please
      </MyButton>
{/* Reusable Button Two*/}
      <MyButton
        onClick={() => alert(searchProduct)}
        style={{ backgroundColor: "red", color: "white", padding: "5px" }}
      >
        Oh my god
      </MyButton>


	  {/* Reusable Antd Card One*/}
	  <AntdCard title='Very Good' description="Nothing Imposible" image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></AntdCard>

	  {/* Reusable Antd Card Two*/}
	  <AntdCard title='Not Bad' description="Intercontainental source" image="https://img.freepik.com/premium-photo/young-man-holding-white-blank-paper-sheet_199352-1021.jpg?w=2000"></AntdCard>


	   {/* Reusable Antd Image One*/}
	   <AntdImage width='200px'image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></AntdImage>

	   {/* Reusable Antd Image Two*/}

	   <AntdImage width='200px'image="https://w0.peakpx.com/wallpaper/67/297/HD-wallpaper-shah-rukh-khan-tie-srk.jpg"></AntdImage>

    </div>
  );
};

export default App;
