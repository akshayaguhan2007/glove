import { motion } from "framer-motion";
import { Cpu, Activity, RotateCw, Bluetooth, CircuitBoard } from "lucide-react";

const components = [
  { icon: Cpu, name: "Arduino Nano", spec: "ATmega328P, 5V, 16MHz", desc: "Microcontroller — reads analog flex sensor values (A0-A4) and communicates with MPU6050 via I2C. Processes sensor data and sends formatted strings over serial.", gradient: "from-sky-500/20 to-blue-500/20" },
  { icon: Activity, name: "Flex Sensors ×5", spec: "10kΩ–50kΩ variable", desc: "One per finger. Resistance changes with bending angle: ~10kΩ straight, ~30-50kΩ bent. Output: analog values 0-1023.", gradient: "from-emerald-500/20 to-green-500/20" },
  { icon: RotateCw, name: "MPU6050", spec: "6-axis IMU", desc: "Accelerometer measures hand tilt (roll, pitch). Gyroscope tracks rotational movement (yaw). Distinguishes gestures with similar finger positions.", gradient: "from-amber-500/20 to-orange-500/20" },
  { icon: Bluetooth, name: "HC-05 Module", spec: "Bluetooth 2.0, 10m range", desc: "Master/slave mode at 9600 baud rate. Sends serial string of sensor values wirelessly to the mobile app.", gradient: "from-blue-500/20 to-indigo-500/20" },
  { icon: CircuitBoard, name: "Support Components", spec: "Resistors, wires, PCB", desc: "5× 10kΩ pull-down resistors for flex sensors, jumper wires for connections, and custom PCB/breadboard for assembly.", gradient: "from-violet-500/20 to-purple-500/20" },
];

const HardwareSection = () => {
  return (
    <section id="hardware" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary block mb-4">
            Engineering
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hardware <span className="text-gradient">Components</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {components.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ x: 8, transition: { duration: 0.3 } }}
              className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${comp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${comp.gradient} flex items-center justify-center shadow-lg`}
              >
                <comp.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>
              <div className="relative z-10 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">{comp.name}</h3>
                  <span className="text-xs font-body tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">{comp.spec}</span>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circuit Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-xl bg-card border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 relative z-10">
            Circuit <span className="text-gradient">Connections</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm relative z-10">
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all">
              <h4 className="text-primary font-semibold mb-3 font-display text-base">⚡ Flex Sensors</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>Thumb → A0</p>
                <p>Index → A1</p>
                <p>Middle → A2</p>
                <p>Ring → A3</p>
                <p>Pinky → A4</p>
                <p className="mt-2 text-xs text-primary/70">5V → Sensor → Pin → 10kΩ → GND</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all">
              <h4 className="text-primary font-semibold mb-3 font-display text-base">🔄 MPU6050</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>VCC → 5V</p>
                <p>GND → GND</p>
                <p>SCL → A5</p>
                <p>SDA → A4</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all">
              <h4 className="text-primary font-semibold mb-3 font-display text-base">📡 HC-05 Bluetooth</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>VCC → 5V</p>
                <p>GND → GND</p>
                <p>TXD → RX (D0)</p>
                <p>RXD → TX (D1)</p>
                <p>EN → 3.3V</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareSection;
