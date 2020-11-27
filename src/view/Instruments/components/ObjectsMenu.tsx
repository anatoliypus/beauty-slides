import React from 'react';
import { AppType } from '../../../model/model';

interface FigureMenuProps {
    app: AppType;
}

export default function ObjectsMenu(props: FigureMenuProps) {
    return (
        <div>
            <select>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="9">9</option>
                <option value="11">11</option>
                <option value="13">13</option>
                <option value="15">15</option>
                <option value="17">17</option>
                <option value="19">19</option>
                <option value="21">21</option>
                <option value="23">23</option>
                <option value="25">25</option>
                <option value="27">27</option>
                <option value="29">29</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
            </select>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}