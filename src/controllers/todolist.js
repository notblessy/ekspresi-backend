import TodoList from "../models/todolists";

export const all = async (req, res) => {
  try {
    const list = await TodoList.query();

    return res.json({
      success: true,
      data: list,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Terjadi kesalahan",
    });
  }
};
export const isActive = async (req, res) => {
  try {
    const list = await TodoList.query().where("is_completed", false);

    return res.json({
      success: true,
      data: list,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Terjadi kesalahan",
    });
  }
};

export const isCompleted = async (req, res) => {
  try {
    const list = await TodoList.query().where("is_completed", true);

    return res.json({
      success: true,
      data: list,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Terjadi kesalahan",
    });
  }
};

export const create = async (req, res) => {
  try {
    const list = await TodoList.query().insert({
      name: req.body.name,
    });

    return res.json({
      success: true,
      data: list,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Gagal memasukkan data!",
    });
  }
};

export const edit = async (req, res) => {
  try {
    const list = await TodoList.query().patchAndFetchById(req.params.id, {
      is_completed: req.body.is_completed,
    });

    return res.json({
      success: true,
      data: list,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Gagal memasukkan data!",
    });
  }
};

export const destroy = async (req, res) => {
  try {
    await TodoList.query().delete().whereIn("id", req.body.ids);

    return res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Gagal menghapus!",
    });
  }
};
