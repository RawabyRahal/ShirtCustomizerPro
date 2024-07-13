import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./logo.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="head-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
            <h1 className="head-text">
  CREATE <br className="xl:block hidden" /> UR TEE
</h1>
            </motion.div>

            <motion.div
              className="flex flex-col gap-5"
              {...headContainerAnimation}
            >
              <p className="max-w-md font-normal text-gray-200 text-base">
                Discover the art of crafting your{" "}
                <span className="text-blue-500 font-bold">unique</span> and{" "}
                <span className="text-blue-500 font-bold">exclusive</span> shirt
                with our cutting-edge{" "}
                <span className="text-blue-500 font-bold">
                  3D customization tool
                </span>
                . Embrace creativity and{" "}
                <strong>bring your imagination to life</strong>. Explore endless
                options and create a masterpiece that reflects your personal
                style.
              </p>

              <CustomButton
                type="filled"
                title="Start Customizing"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
