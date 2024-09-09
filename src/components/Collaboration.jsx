import Section from "./Section";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { collabApps, collabContent, collabText } from "../constants";
import { LeftCurve, RightCurve } from "./design/Collaboration";
const Collaboration = () => {
	return (
		<Section crosses>
			<div className="container lg:flex">
				<div className="max-w-[25rem]">
					<h2 className="h2 mb-4 md:mb-8">
						AI Chat App for seamless collaboration
					</h2>
					<ul className="max-w-[22rem] mb-10 md:mb-14">
						{collabContent.map((collab) => (
							<li className="mb-3 py-3" key={collab.id}>
								<div className="flex items-center">
									<img src={check} alt="check" width={24} height={24} />
									<h6 className="ml-4 body-2">{collab.title}</h6>
								</div>
								{collab.text && (
									<p className="body-2 mt-3 text-n-4">{collab.text}</p>
								)}
							</li>
						))}
					</ul>
					<Button>Try it now</Button>
				</div>
				<div className="lg:ml-auto xl:w-[38rem]">
					<p className="text-n-4 lg:w-[20rem] mb-8 lg:mx-auto lg:mt-4 md:mb-16 lg:mb-32 mt-5">
						{collabText}
					</p>
					<div className="relative left-1/2 flex w-[22rem] border border-n-6 rounded-full -translate-x-1/2 aspect-square scale-75 md:scale-100">
						<div className="flex w-60 rounded-full aspect-square border border-n-6 m-auto">
							<div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
								<div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
									<img
										src={brainwaveSymbol}
										alt="brainwave-symbol"
										width={48}
										height={48}
									/>
								</div>
							</div>
						</div>
						<ul>
							{collabApps.map((collab, index) => (
								<li
									key={collab.id}
									className={`absolute top-0 left-1/2 h-1/2 -m-[1.3rem] origin-bottom rotate-${index * 45}`}
								>
									<div
										className={`relative -top-[1.4rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
									>
										<img
											src={collab.icon}
											alt={collab.title}
											className="m-auto"
											width={collab.width}
											height={collab.height}
										/>
									</div>
								</li>
							))}
						</ul>
						<LeftCurve />
						<RightCurve />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Collaboration;
