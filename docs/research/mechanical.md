
---
title: Mechanical Design
description: Mechanical architecture and locomotion system of the window-cleaning robot.
outline: deep
---

# Mechanical & Locomotion Design

Development of a lightweight suction-based robot capable of
moving across vertical glass surfaces.

## 1. Design Overview

The mechanical subsystem supports the robot's locomotion,
suction adhesion and cleaning mechanisms.

The design aims to minimise the robot's overall mass while
maintaining sufficient structural rigidity and stability
during vertical operation.

### Preliminary Design Specifications

| Parameter | Value |
|---|---|
| Robot Dimensions | 200 × 200 × 80 mm |
| Target Total Mass | 1.5 kg |
| Chassis Material | PLA |
| Manufacturing Method | 3D Printing |
| Adhesion Method | Negative Pressure |
| Suction Configuration | Single Suction Chamber |
| Operating Surface | Vertical Glass |

::: info Design Status
These specifications represent preliminary design
parameters and are subject to further optimisation.
:::

## 2. Chassis Design

The chassis provides the structural framework for
mounting the motors, suction system, electronics
and cleaning mechanism.

### 2.1 Material Selection

PLA is considered for the initial prototype because
it is suitable for low-cost additive manufacturing
and rapid design iterations.

The final chassis must provide sufficient strength
and rigidity while minimising unnecessary material.

### 2.2 Weight Optimisation

The preliminary chassis mass was approximately 532 g.

Weight reduction will be investigated through:

- Reducing unnecessary wall thickness.
- Removing non-load-bearing material.
- Integrating mounting features into the chassis.
- Optimising the suction chamber geometry.
- Maintaining adequate rigidity around motor mounts.

### 2.3 CAD Model

![Robot chassis CAD model](/images/chassis.png)

*Figure 1: Preliminary SolidWorks chassis design.*

## 3. Locomotion System

The robot uses motor-driven wheels to move along
the glass surface while maintaining suction adhesion.

### 3.1 Design Considerations

The locomotion system must:

1. Generate sufficient traction to prevent slipping.
2. Provide adequate torque for upward climbing.
3. Support controlled downward movement.
4. Allow horizontal movement and turning.
5. Minimise electrical energy consumption.

### 3.2 Motor Torque Requirements

During upward climbing, the drive motors must
overcome the gravitational force and additional
motion resistance.

The gravitational force is:

$$
F_g = mg
$$

Where:

- $m$ = robot mass (kg)
- $g$ = gravitational acceleration (m/s²)

For a preliminary robot mass of 1.5 kg:

$$
F_g = 1.5(9.81) = 14.715 \text{ N}
$$

The required drive force must also account for
rolling resistance, acceleration and drivetrain losses.

The motor torque requirement can be estimated using:

$$
\tau = \frac{F_{\text{drive}}r}{n\eta}
$$

Where:

- $F_{\text{drive}}$ = required total drive force (N)
- $r$ = wheel radius (m)
- $n$ = number of driven wheels sharing the load
- $\eta$ = drivetrain efficiency

This assumes approximately equal load sharing
between the driven wheels.

## 4. Suction Adhesion System

The robot uses a negative-pressure suction chamber
to maintain attachment to vertical glass.

### 4.1 Suction Principle

The pressure difference between the atmosphere
and the suction chamber generates a normal force.

$$
F_{\text{suction}} = \Delta P A
$$

Where:

- $F_{\text{suction}}$ = suction normal force (N)
- $\Delta P$ = pressure difference (Pa)
- $A$ = effective sealed suction area (m²)

### 4.2 Traction Requirement

For a simplified static model, the maximum
available friction force is:

$$
F_{\text{friction,max}} = \mu N
$$

Where:

- $\mu$ = effective coefficient of friction
- $N$ = total wheel normal force (N)

To prevent downward slipping:

$$
\mu N \geq mg
$$

The effective wheel normal force depends on how
the suction load is transmitted through the chassis
and wheel contact points.

A suitable safety factor must be included before
selecting the suction fan.

### 4.3 Suction Chamber Design

The current concept uses a single suction chamber
integrated into the lightweight chassis.

The chamber design must consider:

- Effective suction area.
- Leakage around the perimeter.
- Sealing material and surface contact.
- Fan pressure-flow characteristics.
- Wheel contact force.
- Energy consumption.

## 5. Mechanical Design Optimisation

The design will be evaluated based on:

| Metric | Evaluation |
|---|---|
| Chassis Mass | Measured mass (g) |
| Structural Integrity | CAD analysis and physical testing |
| Motor Torque | Calculated and experimentally verified |
| Suction Pressure | Pressure sensor measurements |
| Traction | Slip and climbing tests |
| Energy Consumption | Electrical power measurements |

## 6. Future Development

The following tasks are planned:

- Finalise chassis geometry.
- Reduce the overall chassis mass.
- Integrate the suction chamber.
- Select suitable wheels and motors.
- Manufacture the prototype.
- Perform suction and climbing experiments.
- Validate the mechanical calculations.

::: warning Safety
Initial vertical-climbing experiments should be
conducted close to the ground with an independent
mechanical safety tether.
:::
