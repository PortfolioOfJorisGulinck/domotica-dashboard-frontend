import { useEffect, useState } from "react";
import { getRooms, putRoom } from "./../api/callRooms";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  const readAllRooms = async () => {
    getRooms().then((rooms) => setRooms(rooms));
  };

  const readRoomsOfFloor = (floorId) => {
    return rooms.filter((room) => room.floorId === floorId);
  };

  const readRoom = (roomId) => {
    return rooms.find((room) => room.id === +roomId);
  };

  const updateRoom = async (room) => {
    setRooms((previousRooms) =>
      previousRooms.map((r) => {
        if (r.id !== room.id) return r;
        return room;
      })
    );

    console.log(room);
    return putRoom(room);
  };

  useEffect(() => {
    readAllRooms();
  }, []);

  return {
    rooms,
    readAllRooms,
    readRoomsOfFloor,
    readRoom,
    updateRoom,
  };
};

export default useRooms;
