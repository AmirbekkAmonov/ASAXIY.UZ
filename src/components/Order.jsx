import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/styles/main.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCreditCard, faWallet,faUser } from "@fortawesome/free-solid-svg-icons";
import { UseStateValue } from '@/context';
import ProductCard from './ProductCard';
import YandexMap from './YandexMap';
import { useNavigate } from 'react-router-dom';
import Modal from './OrderModal';

const regions = {
    toshkent: ["Chilonzor", "Yunusobod", "Shayxontohur"],
    samarqand: ["Urgut", "Narpay", "Jomboy"],
    fergana: ["Marg'ilon", "Qo'qon", "Rishton"],
    buxoro: ["G'ijduvon", "Vobkent", "Peshku"],
    navoiy: ["Zarafshon", "Nurota", "Karmana"]
};
function Order() {
    const { cart, removeFromCart } = UseStateValue();
    const { control, handleSubmit, register, formState: { errors }, setValue, watch, reset } = useForm();
    const [districts, setDistricts] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [priceCard, setPriceCard] = useState(0);
    const selectedRegion = watch("region");
    const selectedDistrict = watch("district");
    const [deliveryPrice2, setDeliveryPrice2] = useState(null);
    const navigete = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleRegionChange = (e) => {
        const region = e.target.value;
        setValue("region", region);
        setValue("district", "");
        setDistricts(region ? regions[region] : []);
    };

    const onSubmit = (data) => {
        console.log('Form ma\'lumotlari:', data);
        setIsModalOpen(true);
        reset();
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handlePrice = (index) => {
        setPriceCard((prevIndex) => (prevIndex === index ? null : index));
    };

    const [deliveryPrice, setDeliveryPrice] = useState("Yetkazib berish narxi hisoblanmaydi");

    useEffect(() => {
        if (selectedRegion && selectedDistrict && activeIndex === 0) {
            setDeliveryPrice(`Yetkazib berish haqqi: ${(30000).toLocaleString()} so'm`);
        } else {
            setDeliveryPrice("Yetkazib berish narxi hisoblanmaydi");
        }
    }, [selectedRegion, selectedDistrict, activeIndex]);



    useEffect(() => {
        if (selectedRegion && selectedDistrict) {
            setDeliveryPrice2(30000);
        } else {
            setDeliveryPrice2(null);
        }
    }, [selectedRegion, selectedDistrict]);

    return (
        <div className='order'>
            <div className="container">
                <h2>Buyurtma rasmiylashtirish</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='order-content'>
                    <div className='order-content-form'>
                        <div className='form-fullname'>
                            <div className='input-label'>
                                <label htmlFor="phone">Telefon <span>*</span></label>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: '«Telefon» qiymati noto`g`ri.' }}
                                    render={({ field }) => (
                                        <PhoneInput
                                            {...field}
                                            country={'uz'}
                                            masks={{ uz: '(..) ...-..-..' }}
                                            inputClass="phone-input-field"
                                            containerClass="phone-input-container"
                                            inputStyle={{ paddingLeft: '50px' }}
                                        />
                                    )}
                                />
                                {errors.phone && <span className="error">{errors.phone.message}</span>}
                            </div>
                            <div className='input-label'>
                                <label htmlFor="fullname">F.I.O <span>*</span></label>
                                <input
                                    type="text"
                                    id='fullname'
                                    {...register("fullname", { required: "«F.I.O» to`ldirish shart." })}
                                />
                                {errors.fullname && <span className="error">{errors.fullname.message}</span>}
                            </div>
                        </div>
                        <div className='form-fulladdress'>
                            <div className='input-label'>
                                <label htmlFor="region">Viloyat <span>*</span></label>
                                <select
                                    id="region"
                                    {...register("region", { required: "«Viloyat» to`ldirish shart." })}
                                    onChange={handleRegionChange}
                                >
                                    <option value="">Viloyatni tanlang</option>
                                    {Object.keys(regions).map((region) => (
                                        <option key={region} value={region}>{region.charAt(0).toUpperCase() + region.slice(1)}</option>
                                    ))}
                                </select>
                                {errors.region && <span className="error">{errors.region.message}</span>}
                            </div>

                            <div className='input-label'>
                                <label htmlFor="district">Shahar / Tuman <span>*</span></label>
                                <select
                                    id="district"
                                    {...register("district", { required: "«Shahar / Tuman» to`ldirish shart." })}
                                    disabled={!selectedRegion}
                                >
                                    <option value="">Tuman yoki shaharni tanlang</option>
                                    {districts.map((district) => (
                                        <option key={district} value={district}>{district}</option>
                                    ))}
                                </select>
                                {errors.district && <span className="error">{errors.district.message}</span>}
                            </div>
                        </div>
                        <div className='order-text '>
                            <h2>Yetkazib berish turi</h2>
                            <div className='order-text-content'>
                                <div className={`order-text-content-item ${activeIndex === 0 ? "active" : ""}`}
                                    onClick={() => handleClick(0)}
                                >
                                    <h3>Uyga yetkazib berish</h3>
                                    <div className='order-text-content-item-img'>
                                        <FontAwesomeIcon icon={faCheck} className='icon' style={{ color: "green" }} />
                                        <p>{deliveryPrice}</p>
                                    </div>
                                </div>
                                <div
                                    className={`order-text-content-item ${activeIndex === 1 ? "active" : ""}`}
                                    onClick={() => handleClick(1)}
                                >
                                    <h3>Qabul qilish punkti</h3>
                                    <div className='order-text-content-item-img'>
                                        <FontAwesomeIcon icon={faCheck} className='icon' style={{ color: "green" }} />
                                        <p>Bepul yetkazib berish</p>
                                    </div>
                                    <div className='order-text-content-item-img'>
                                        <FontAwesomeIcon icon={faCheck} className='icon' style={{ color: "green" }} />
                                        <p>Buyurtmani saqlash muddati - 5 kun</p>
                                    </div>
                                    <div className='order-text-content-item-img'>
                                        <FontAwesomeIcon icon={faCheck} className='icon' style={{ color: "green" }} />
                                        <p>Mahsulotni tekshirib ko'rish mumkin</p>
                                    </div>
                                    <div className='order-text-content-item-img'>
                                        <FontAwesomeIcon icon={faCheck} className='icon' style={{ color: "green" }} />
                                        <p>Mahsulotlarning tez va muammosiz qaytarib olinishi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='input-label'>
                            <label htmlFor="address">Manzil <span>*</span></label>
                            <input
                                type="text"
                                id='address'
                                {...register("address", { required: "«Manzil» to`ldirish shart." })}
                            />
                            {errors.address && <span className="error">{errors.address.message}</span>}
                        </div>
                        <div className='input-label'>
                            <label htmlFor="moljal">Mo'ljal </label>
                            <input
                                type="text"
                                id='moljal'
                                {...register("moljal")}
                            ></input>
                        </div>
                        <div className='input-label'>
                            <label htmlFor="job">Ish joyingiz manzili</label>
                            <textarea
                                type="text"
                                id='job'
                                {...register("job")}
                            ></textarea>
                        </div>
                        <div className='input-label'>
                            <label htmlFor="comment">Buyurtmaga izoh</label>
                            <textarea
                                type="text"
                                id='comment'
                                {...register("comment")}
                            ></textarea>
                        </div>
                        <div className='input-label'>
                            <label htmlFor="promo">Promo-kod bormi?</label>
                            <input
                                type="text"
                                id='promo'
                                {...register("promo")}
                            ></input>
                        </div>
                        <div className='order-card-to'>
                            <h2>To`lov usuli</h2>
                            <div className={`order-card-to-content ${priceCard === 0 ? "active" : ""}`} onClick={() => handlePrice(0)}>
                                <FontAwesomeIcon icon={faCreditCard} />
                                <h3>Karta orqali onlayn to'lov (UzCard, Humo, Visa, MasterCard)</h3>
                            </div>
                            <div className={`order-card-to-content ${priceCard === 1 ? "active" : ""}`} onClick={() => handlePrice(1)}>
                                <FontAwesomeIcon icon={faWallet} />
                                <h3>Mahsulotni olganda (naqd)</h3>
                            </div>
                            <div className={`order-card-to-content ${priceCard === 2 ? "active" : ""}`} onClick={() => handlePrice(2)}>
                                <FontAwesomeIcon icon={faUser} />
                                <h3>Hisob raqam orqali to'lash</h3>
                            </div>
                        </div>
                        <YandexMap />
                        <form>
                            <input type="checkbox" name="checkbox" id="checkbox" {...register("checkbox")} />
                            <label htmlFor="checkbox">Men tovarlarni sotib olish shartlariga roziman</label>
                        </form>
                        <div className='order-button'>
                            <button type='submit'>Buyurtma qilish</button>
                            <button onClick={() => navigete(-1)}>Orqaga</button>
                        </div>
                    </div>
                    <div className='order-content-to'>
                        <p className='p'>Savatdagi mahsulotlar soni: {cart.length} </p>
                        {deliveryPrice2 && (
                            <>
                                <p className='narx'>Yetkazib berish narxi</p>
                                <span className='narx-span'>{deliveryPrice2.toLocaleString()} so'm</span>
                            </>
                        )}
                        <p>Mahsulotlarning narxi</p>
                        <span >{cart.reduce((total, item) => total + item.price * item.quantity * 13000, 0).toLocaleString()} so'm</span>
                        {deliveryPrice2 && (
                            <>
                                <p className='narx'>Umumiy qiymat:</p>
                                <span className='narx-span-order'>{(cart.reduce((total, item) => total + item.price * item.quantity * 13000, 0) + deliveryPrice2).toLocaleString()} so'm</span>
                            </>
                        )

                        }
                        <div className='order-content-to-btn'>
                            {cart.map((product) => (
                                <ProductCard key={product.id} product={product} removeProduct={removeFromCart} isOrder={true} />
                            ))}
                        </div>
                    </div>
                </form>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Buyurtma qabul qilindi">
                <p>Sizning buyurtmangiz qabul qilindi va tez orada operator siz bilan bog‘lanadi.</p>
                <button onClick={() => setIsModalOpen(false)}>Yopish</button>
            </Modal>
        </div>
    );
}

export default Order;
