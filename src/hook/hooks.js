import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";

export const useAppDispatcher = useDispatch()
export const useAppSelector = useSelector()
export const useAppNavigator = useNavigation()