-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2025 at 01:25 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mantenimientobd`
--

-- --------------------------------------------------------

--
-- Table structure for table `equipo`
--

CREATE TABLE `equipo` (
  `id_equipo` int(40) NOT NULL,
  `nombreEquipo` varchar(100) NOT NULL,
  `tipoEquipo` varchar(100) NOT NULL,
  `numeroSerie` varchar(100) NOT NULL,
  `fechaIngreso` date NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `id_ubicacion` int(40) NOT NULL,
  `id_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `equipo`
--

INSERT INTO `equipo` (`id_equipo`, `nombreEquipo`, `tipoEquipo`, `numeroSerie`, `fechaIngreso`, `descripcion`, `id_ubicacion`, `id_estado`) VALUES
(6, 'Laptop HP 15 S336', 'Computo', '23556225763458724576547', '2025-07-10', 'Laptop HP 15 S335 para oficina.', 7, 6),
(8, 'Batería portátil Samsung', 'Energía', '234563267546845', '2025-07-10', 'Bateria externa 20000mAh', 7, 6);

-- --------------------------------------------------------

--
-- Table structure for table `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(40) NOT NULL,
  `estadoEquipos` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `estado`
--

INSERT INTO `estado` (`id_estado`, `estadoEquipos`) VALUES
(5, 'Activo'),
(6, 'Registrado'),
(7, 'Leída');

-- --------------------------------------------------------

--
-- Table structure for table `mantenimiento`
--

CREATE TABLE `mantenimiento` (
  `id_mantenimiento` int(40) NOT NULL,
  `fecha_programada` date NOT NULL,
  `tipo_tarea` varchar(100) NOT NULL,
  `comentario` varchar(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `id_equipo` int(40) NOT NULL,
  `id_usuario` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mantenimiento`
--

INSERT INTO `mantenimiento` (`id_mantenimiento`, `fecha_programada`, `tipo_tarea`, `comentario`, `estado`, `id_equipo`, `id_usuario`) VALUES
(4, '2025-07-10', 'Limpieza', 'Se requiere limpieza general.', 'Pendiente', 6, 4),
(5, '2025-07-10', 'Revisión', 'No prende.', 'Pendiente', 6, 4),
(6, '2025-07-10', 'Arreglo', 'La tecla \"F\" del teclado no funciona.', 'Pendiente', 6, 4),
(7, '2025-07-10', 'Limpieza', 'Nada que reportar', '0', 8, 4),
(8, '2025-07-11', 'Revisión', 'Se requiere revisión general.', '0', 8, 4),
(9, '2025-07-15', 'Revisión general', 'Revisar todo', '0', 6, 4),
(10, '2025-07-11', 'Revisión general.', 'Realizar revisión de rutina, hardware y software.', '0', 6, 6);

-- --------------------------------------------------------

--
-- Table structure for table `reporte`
--

CREATE TABLE `reporte` (
  `id_reporte` int(40) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `tipo_reporte` varchar(100) NOT NULL,
  `contenido` varchar(100) NOT NULL,
  `id_mantenimiento` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reporte`
--

INSERT INTO `reporte` (`id_reporte`, `fecha_creacion`, `tipo_reporte`, `contenido`, `id_mantenimiento`) VALUES
(4, '2025-07-10', 'Tipo de reporte no sé', 'Contenido esperado, mucha info.', 4),
(5, '2025-07-11', 'Reparación', 'Se realizó el arreglo solicitado.', 6),
(6, '2025-07-11', 'Reparación', 'Se realizó la reparación exitosamente y el equipo está listo para ser asignado.', 10);

-- --------------------------------------------------------

--
-- Table structure for table `ubicacion`
--

CREATE TABLE `ubicacion` (
  `id_ubicacion` int(40) NOT NULL,
  `nombreUbicacion` varchar(100) NOT NULL,
  `piso` int(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ubicacion`
--

INSERT INTO `ubicacion` (`id_ubicacion`, `nombreUbicacion`, `piso`, `descripcion`) VALUES
(7, 'Oficina 12B', 2, 'Oficina 12B puerta azul');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(40) NOT NULL,
  `nombreUsuario` varchar(100) NOT NULL,
  `apellidoP` varchar(100) NOT NULL,
  `apellidoM` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombreUsuario`, `apellidoP`, `apellidoM`, `correo`, `contraseña`) VALUES
(4, 'Ángel', 'Ramirez', 'Ramos', 'angelrr@gmail.com', 'inicio1234456'),
(5, 'Ernesto', 'León', 'Avendaño', 'ernestola@gmail.com', 'contraseñasegura123'),
(6, 'José', 'Leon', 'Diaz', 'joseld@gmail.com', 'contraseña1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id_equipo`),
  ADD KEY `ubicacion_id_ubicacion_equipo` (`id_ubicacion`),
  ADD KEY `estado_id_estado_equipo` (`id_estado`);

--
-- Indexes for table `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indexes for table `mantenimiento`
--
ALTER TABLE `mantenimiento`
  ADD PRIMARY KEY (`id_mantenimiento`),
  ADD KEY `equipo_id_equipo_mantenimiento` (`id_equipo`),
  ADD KEY `usuario_id_usuario_mantenimiento` (`id_usuario`);

--
-- Indexes for table `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`id_reporte`),
  ADD KEY `mantenimiento_id_mantenimiento_reporte` (`id_mantenimiento`);

--
-- Indexes for table `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`id_ubicacion`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id_equipo` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `estado`
--
ALTER TABLE `estado`
  MODIFY `id_estado` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `mantenimiento`
--
ALTER TABLE `mantenimiento`
  MODIFY `id_mantenimiento` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reporte`
--
ALTER TABLE `reporte`
  MODIFY `id_reporte` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `id_ubicacion` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `estado_id_estado_equipo` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ubicacion_id_ubicacion_equipo` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicacion` (`id_ubicacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `mantenimiento`
--
ALTER TABLE `mantenimiento`
  ADD CONSTRAINT `equipo_id_equipo_mantenimiento` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `usuario_id_usuario_mantenimiento` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `reporte`
--
ALTER TABLE `reporte`
  ADD CONSTRAINT `mantenimiento_id_mantenimiento_reporte` FOREIGN KEY (`id_mantenimiento`) REFERENCES `mantenimiento` (`id_mantenimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
