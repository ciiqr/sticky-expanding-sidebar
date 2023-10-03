"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [pos, setPos] = useState(0);
    const parentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log(
            9,
            parentRef.current,
            parentRef.current?.getBoundingClientRect().top,
        );
        setPos(parentRef.current?.getBoundingClientRect().top ?? 0);
    }, []);

    return (
        <main
            onScroll={() => {
                setPos(parentRef.current?.getBoundingClientRect().top ?? 0);
            }}
            className="container mx-auto h-full overflow-auto"
        >
            <div className="flex flex-col items-center">
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
                <p>HEADER</p>
            </div>
            <div ref={parentRef} className="box-border flex w-full flex-row">
                <div className="box-border flex h-full flex-col items-center">
                    <p>0</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                    <p>32</p>
                    <p>33</p>
                    <p>34</p>
                    <p>35</p>
                    <p>36</p>
                    <p>37</p>
                    <p>38</p>
                    <p>39</p>
                    <p>40</p>
                    <p>41</p>
                    <p>42</p>
                    <p>43</p>
                    <p>44</p>
                    <p>45</p>
                    <p>46</p>
                    <p>47</p>
                    <p>48</p>
                    <p>49</p>
                    <p>50</p>
                    <p>51</p>
                    <p>52</p>
                    <p>53</p>
                    <p>54</p>
                    <p>55</p>
                    <p>56</p>
                    <p>57</p>
                    <p>58</p>
                    <p>59</p>
                    <p>60</p>
                    <p>61</p>
                    <p>62</p>
                    <p>63</p>
                    <p>64</p>
                </div>
                <div
                    className="sticky top-0 box-border flex max-h-screen w-24 flex-col bg-blue-700"
                    style={{
                        height: `calc(100vh - ${Math.max(pos, 0)}px)`,
                    }}
                >
                    <p>top</p>
                    <div className="overflow-auto">
                        <p className="bg-green-700">first</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p>---</p>
                        <p className="bg-red-700">last</p>
                    </div>
                    <p>bottom</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
                <p>FOOTER</p>
            </div>
        </main>
    );
}
