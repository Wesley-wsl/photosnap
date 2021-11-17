import React, { useState } from "react";

import check from "../../assets/pricing/desktop/check.svg";
import hero from "../../assets/pricing/desktop/hero.jpg";
import Beta from "../../components/Beta";
import { IntroPage } from "../../styles/GlobalStyle";
import { Compare, InfoPricing } from "./styles";

const Pricing: React.FC = () => {
    const [yearly, setyearly] = useState(false);
    return (
        <main>
            <IntroPage>
                <div>
                    <h1>PRICING</h1>
                    <p>
                        Create a your stories, Photosnap is a platform for
                        photographers and visual storytellers. It’s the simple
                        way to create and share your photos.
                    </p>
                </div>

                <div>
                    <img src={hero} alt="hero img" />
                </div>
            </IntroPage>

            <InfoPricing>
                <div>
                    {yearly ? (
                        <p>Monthly</p>
                    ) : (
                        <p>
                            <strong>Monthly</strong>
                        </p>
                    )}
                    <input
                        type="checkbox"
                        onChange={() => setyearly(!yearly)}
                    />
                    {yearly ? (
                        <p>
                            <strong>Yearly</strong>
                        </p>
                    ) : (
                        <p>Yearly</p>
                    )}
                </div>

                <div className="info-pricing">
                    <div>
                        <h2>Basic</h2>
                        <p>
                            Includes basic usage of our platform. Recommended
                            for new and aspiring photographers.
                        </p>
                        {yearly ? (
                            <p>
                                $190.00 <span>per year</span>
                            </p>
                        ) : (
                            <p>
                                $19.00 <span>per month</span>
                            </p>
                        )}
                        <button type="button">Pick Plan</button>
                    </div>
                    <div>
                        <h2>Pro</h2>
                        <p>
                            More advanced features available. Recommended for
                            photography veterans and professionals.
                        </p>
                        {yearly ? (
                            <p>
                                $390.00 <span>per year</span>
                            </p>
                        ) : (
                            <p>
                                $39.00 <span>per month</span>
                            </p>
                        )}
                        <button type="button">Pick Plan</button>
                    </div>
                    <div>
                        <h2>Business</h2>
                        <p>
                            Additional features available such as more detailed
                            metrics. Recommended for business owners.
                        </p>

                        {yearly ? (
                            <p>
                                $990.00 <span>per year</span>
                            </p>
                        ) : (
                            <p>
                                $99.00 <span>per month</span>
                            </p>
                        )}
                        <button type="button">Pick Plan</button>
                    </div>
                </div>
            </InfoPricing>

            <Compare>
                <h2>Compare</h2>

                <table>
                    <thead>
                        <tr>
                            <th>The features</th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Business</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Unlimited story posting</th>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Unlimited photo upload</th>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Embedding custom content</th>
                            <td />
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Customize metadata</th>
                            <td />
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Advanced metrics</th>
                            <td />
                            <td>
                                <img src={check} alt="check" />
                            </td>
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Photo downloads</th>
                            <td />
                            <td />
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Search engine indexing</th>
                            <td />
                            <td />
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                        <tr>
                            <th>Custom analytics</th>
                            <td />
                            <td />
                            <td>
                                <img src={check} alt="check" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Compare>
            <Beta />
        </main>
    );
};

export default Pricing;
