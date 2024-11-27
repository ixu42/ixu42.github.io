import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import particlesConfig from '../config/particles.json'

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadFull(engine)
        })
        setInit(true)
      } catch (error) {
        console.error("Failed to initialize particles engine:", error)
      }
    }

    initializeParticles()
  }, [])

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
        />
      )}
    </div>
  )
}

export default ParticlesBackground
