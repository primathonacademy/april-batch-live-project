import { datas, contentSection } from '../../../constants/insight';

const ArticleSection = () => {
    return (
        <>
            <section className="flex flex-row md:gap-[12%] my-[45px] px-[9.5%] py-0">
                <div className="md:basis-2/5" />
                <div className="md:basis-3/5">
                    {datas.articleContent?.map((item) => (
                        <p className="text-lg font-normal text-gray-500 mb-[30px] font-roboto " key={item.id}>
                            {item.description}
                        </p>
                    ))}
                </div>
            </section>

            {contentSection.map((item, index) => (
                <section
                    className="md:flex md:flex-row gap-[12%] md:my-11 px-[9.5%] py-0 flex flex-col my-5"
                    key={index}>
                    <div className="basis-2/5">
                        <h2 className="text-4xl max-w-72 font-medium font-poppins">{item?.heading}</h2>
                    </div>

                    <div className="basis-3/5">
                        {item.paragraph?.map((item) => (
                            <>
                                {
                                    <>
                                        <strong>{item.id}.</strong>&nbsp;
                                        <strong>{item.subDescription}</strong>
                                        <p className="text-lg font-normal text-gray-500 mb-8 font-roboto" key={item.id}>
                                            {item.description}
                                        </p>
                                    </>
                                }
                            </>
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
};

export default ArticleSection;
