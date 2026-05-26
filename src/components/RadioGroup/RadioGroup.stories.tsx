import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta = {
  component: RadioGroup,
  subcomponents: { RadioGroupItem },
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          "RadioGroup - группа взаимоисключающих вариантов выбора. Используется, когда пользователь должен выбрать ровно один вариант из небольшого набора. `RadioGroupItem` отвечает за отдельный пункт с контролом и подписью.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Список элементов `RadioGroupItem`, доступных для выбора.",
    },
    defaultValue: {
      control: "text",
      description: "Значение выбранного пункта при первом рендере неконтролируемой группы.",
    },
    value: {
      control: "text",
      description: "Текущее значение для контролируемого режима.",
    },
    name: {
      control: "text",
      description: "Имя группы radio-кнопок для форм и доступности.",
    },
    disabled: {
      control: "boolean",
      description: "Отключает всю группу выбора.",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelection: Story = {
  parameters: {
    docs: {
      description: {
        story: "Базовая группа с выбранным значением по умолчанию.",
      },
    },
  },
  args: {
    defaultValue: "email",
    name: "notification-channel",
    children: (
      <>
        <RadioGroupItem value="email">Email</RadioGroupItem>
        <RadioGroupItem value="sms">SMS</RadioGroupItem>
        <RadioGroupItem value="push">Push</RadioGroupItem>
      </>
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("radio", { name: /email/i })).toHaveAttribute("aria-checked", "true");
  },
};

export const WithDisabledOption: Story = {
  parameters: {
    docs: {
      description: {
        story: "Пример с отдельным недоступным пунктом внутри группы.",
      },
    },
  },
  args: {
    defaultValue: "standard",
    name: "delivery-speed",
    children: (
      <>
        <RadioGroupItem value="standard">Standard</RadioGroupItem>
        <RadioGroupItem value="express">Express</RadioGroupItem>
        <RadioGroupItem value="overnight" disabled>
          Overnight
        </RadioGroupItem>
      </>
    ),
  },
};

export const Horizontal: Story = {
  parameters: {
    docs: {
      description: {
        story: "Горизонтальная раскладка для компактных наборов вариантов.",
      },
    },
  },
  args: {
    defaultValue: "left",
    name: "alignment",
    style: {
      flexDirection: "row",
    },
    children: (
      <>
        <RadioGroupItem value="left">Left</RadioGroupItem>
        <RadioGroupItem value="center">Center</RadioGroupItem>
        <RadioGroupItem value="right">Right</RadioGroupItem>
      </>
    ),
  },
};
