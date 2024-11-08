import "./DiaryList.css";
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({data}) => {
    
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a,b) => {
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                Number(b.createdDate) - Number(a.createdDate);
        }
        });
    };

    const sortedData = getSortedData();

    return (
    <div className="DiaryList">
        <div className="menu_bar">
            <select onChange={onChangeSortType}>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된순</option>
            </select>
            <Button 
            onClick={()=>nav("/New")}
            text = {"새 일기 쓰기"} type={"POSITIVE"}/>
        </div>
        <div className="list_wrapper"></div>
        {sortedData.map((item) => (<DiaryItem key={item.id} {...item}/>))}
    </div>
    )
};

export default DiaryList;