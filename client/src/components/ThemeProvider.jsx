import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function ThemeProvider({ children }) {
    const { currentTheme } = useSelector(state => state.theme);

    useEffect(() => {
        document.body.className = currentTheme;
    }, [currentTheme]);
    
  return (
    <div className={currentTheme}>
        {children}
    </div>
  );
}