import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("will return saved question", async () => {
    const question = {
      optionOneText: "Color Black",
      optionTwoText: "Color Blue",
      author: "user",
    };
    const result = await _saveQuestion(question);
    expect(result).toMatchObject(result);
  });

  it("will return an error if the passed data is not correct", async () => {
    const question = {
      optionOneText: "Color Black",
      optionTwoText: "Color Blue",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return saved question", async () => {
    const result = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });
    expect(result).toEqual(true);
  });

  it("will return an error if the passed data is not correct", async () => {
    await expect(
      _saveQuestionAnswer("sarahedo", "8xf0y6ziyjabvozdd253nd", null)
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
