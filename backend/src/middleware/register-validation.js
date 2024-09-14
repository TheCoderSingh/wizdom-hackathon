// zod Validations
const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(3).email(),
  password: z.string().min(3),
  admin: z.boolean().optional(),
  token: z.string().optional(),
}).strict();

export const registerValidation = async (req, res, next) => {
  // validating using zod
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).send(parsed.error)
    return;
  }

  const { email: emailFromBody } = req.body;
  try {
    // checking to see if the user is already registered
    const emailExist = await User.findOne({ email: emailFromBody });
    if (emailExist) {
      res.status(400).send({ message: messages.emailExistsError });
      return;
    }
    next();
  } catch (err) {
    console.error('Error occurred while validating registration: ', err);
    res.status(500).send({ message: messages.serverError });
  }
}
