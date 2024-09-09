import Heading from "./Heading";
import Section from "./Section";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
	PhotoChatMessage,
	Gradient,
	VideoChatMessage,
	VideoBar,
} from "./design/Services";

const Services = () => {
	return (
		<Section id="how-to-use">
			<div className="container">
				<Heading
					title="Generative AI made for creators."
					className="flex items-center justify-center"
					text="Brainwave unlocks the potential of AI-powered applications"
				/>
				<div className="relative">
					<div
						className="relative z-1 flex items-center 
                        h-[39rem] p-8 mb-5 border border-n-1/10 overflow-hidden rounded-3xl lg:p-20 xl:h-[46rem]"
					>
						<div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
							<img
								src={service1}
								alt="smartest-ai"
								width={800}
								height={730}
								className="w-full h-full object-cover md:object-right"
							/>
						</div>
						<div className="relative z-1 max-w-[17rem] ml-auto">
							<h3 className="h3">Smartest AI</h3>
							<p className="text-n-4 pb-8">
								Brainwave unlocks the potential of AI-powered applications
							</p>
							<ul className="body-2">
								{brainwaveServices.map((service, index) => (
									<>
										<hr className="border-n-4/40 mt-4" />
										{/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
										<li key={index} className="flex items-center">
											<img src={check} alt="check-icon" className="mt-4 mr-2" />
											<p className="mt-4 ml-2"> {service}</p>
										</li>
									</>
								))}
							</ul>
						</div>
						<Generating
							className="absolute right-4 bottom-4 border border-n-1/10 
                            lg:left-1/2 lg:bottom-8 lg:-translate-x-1/2 "
						/>
					</div>
					<div className="relative z-1 grid gap-5 lg:grid-cols-2">
						<div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
							<div className="absolute inset-0">
								<img
									src={service2}
									alt="robot"
									className="w-full h-full object-cover"
									width={630}
									height={750}
								/>
							</div>
							<div className="absolute z-1 bottom-0 left-[4rem] mb-[3rem] max-w-[33rem]">
								<h3 className="h3">Photo editing</h3>
								<p className="text-n-4 pb-8">
									Automatically enhance your photos using our AI app's photo
									editing feature. Try it now!
								</p>
							</div>
							<PhotoChatMessage />
						</div>
						<div className="py-12 px-8 xl:px-8 min-h-[39rem] border border-n-1/10 bg-n-7 rounded-3xl overflow-hidden">
							<h4 className="h4">Video Generation</h4>
							<p className="text-n-4 pb-8 pt-3">
								The world’s most powerful AI photo and video art generation
								&nbsp; &nbsp; engine. What will you create?
							</p>
							<ul
								className="flex items-center justify-between
                            "
							>
								{brainwaveServicesIcons.map((item, index) => (
									<li
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										className={`rounded-2xl flex items-center 
                                        justify-center ${
																					index === 2
																						? "w-3 h-3 p-0.5 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]"
																						: "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
																				}`}
									>
										<div
											className={
												index === 2
													? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
													: ""
											}
										>
											<img width={24} height={24} src={item} alt="icons" />
										</div>
									</li>
								))}
							</ul>
							<div className="relative mt-8 h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
								<img
									src={service3}
									alt="robot3"
									className="w-full h-full object-cover"
									width={520}
									height={400}
								/>
								<VideoChatMessage />
								<VideoBar />
							</div>
						</div>
					</div>
                    <Gradient />
				</div>
			</div>
		</Section>
	);
};
export default Services;
