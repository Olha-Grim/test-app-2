import React from "react";
import AlertExample from "./Components/Alert";
import AvatarExample from "./Components/Avatar";
import ButtonExample from "./Components/Button";
import AffixExample from "./Components/Affix";
import AnchorExample from "./Components/Anchor";
import BackTopExample from "./Components/BackTop";
import DividerExample from "./Components/Divider/example";
import AutoCompleteExample from "./Components/AutoComplete/example";
import CheckboxExample from "./Components/Checkbox/example";
import BreadcrumbExample from "./Components/Breadcrumb/example";
import TypographyExample from "./Components/Typography/example";
import GridExample from "./Components/Grid/example";
import DropdownExample from "./Components/Dropdown/example";
import SpaceExample from "./Components/Space/example";
import InputExample from "./Components/Input/example";
import LayoutExample from "./Components/Layout/example";
import PageHeaderExample from "./Components/PageHeader/example";
import PaginationExample from "./Components/Pagination/example";
import StepsExample from "./Components/Steps/example";
import CascaderExample from "./Components/Cascader/example";
import DatePickerExample from "./Components/DatePicker/example";
import FormExample from "./Components/Form/example";
import InputNumberExample from "./Components/InputNumber/example";
import MentionsExample from "./Components/Mentions/example";
import RadioExample from "./Components/Radio/example";
import RateExample from "./Components/Rate/example";
import SliderExample from "./Components/Slider/example";
import SelectExample from "./Components/Select/example";
import SwitchExample from "./Components/Switch/example";
import TimePickerExample from "./Components/TimePicker/example";
import TransferExample from "./Components/Transfer/example";
import TreeSelectExample from "./Components/TreeSelect/example";
import UploadExample from "./Components/Upload/example";
import CalendarExample from "./Components/Calendar/example";
import CardExample from "./Components/Card/example";
import CarouselExample from "./Components/Carousel/example";
import CollapseExample from "./Components/Collapse/example";
import CommentExample from "./Components/Comment/example";
import DescriptionsExample from "./Components/Descriptions/example";
import EmptyExample from "./Components/Empty/example";
import ImageExample from "./Components/Image/example";
import ListExample from "./Components/List/example";
import PopoverExample from "./Components/Popover/example";
import StatisticExample from "./Components/Statistic/example";
import TableExample from "./Components/Table/example";
import TabsExample from "./Components/Tabs/example";
import TagExample from "./Components/Tag/example";
import TimelineExample from "./Components/Timeline/example";
import TooltipExample from "./Components/Tooltip/example";
import TreeExample from "./Components/Tree/example";
import DrawerExample from "./Components/Drawer/example";
import MessageExample from "./Components/Message/example";
import ModalExample from "./Components/Modal/example";
import NotificationExample from "./Components/Notification/example";
import PopconfirmExample from "./Components/Popconfirm/example";
import ProgressExample from "./Components/Progress/example";
import ResultExample from "./Components/Result/example";
import SkeletonExample from "./Components/Skeleton/example";
import SpinExample from "./Components/Spin/example";
import Apps from "./Components/Screens/Apps";
import Settings from "./Components/Screens/Settings";
import AccountChange from "./Components/Screens/AccountChange";
import IconExample from "./Components/Icon/example";
// import PSError from "./Components/Screens/PSError";


function App() {
  return (
    <div
      style={{
        padding: "2rem",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <h1>Components</h1>
        <h2>ErrorMessage</h2>
        {/* <PSError /> */}
        <h2>Settings</h2>
        <Settings/>
        <h2>Apps</h2>
        <Apps />
        <h2>AccountChange!!!</h2>
        <AccountChange />
        <h2>AutoComplete!!!</h2>
        <AutoCompleteExample />
        <h2>Button</h2>
        <ButtonExample />
        <h2>Alert</h2>
        <AlertExample />
        <h2>Icon</h2>
        <IconExample />
        <h2>Typography</h2>
        <TypographyExample />
        <h2>Divider</h2>
        <DividerExample />
        <h2>Grid</h2>
        <GridExample />
        <h2>Layout</h2>
        <LayoutExample />
        <h2>Space</h2>
        <SpaceExample />
        <h2>Affix</h2>
        <AffixExample />
        <h2>Breadcrumb</h2>
        <BreadcrumbExample />
        <h2>Dropdown</h2>
        <DropdownExample />
        <h2>PageHeader</h2>
        <PageHeaderExample />
        <h2>Pagination</h2>
        <PaginationExample />
        <h2>Steps</h2>
        <StepsExample />
        <h2>Cascader</h2>
        <CascaderExample />
        <h2>Checkbox</h2>
        <CheckboxExample />
        <h2>DatePicker</h2>
        <DatePickerExample />
        <h2>Form</h2>
        <FormExample />
        <h2>Input</h2>
        <InputExample />
        <h2>InputNumber</h2>
        <InputNumberExample />
        <h2>Mentions</h2>
        <MentionsExample />
        <h2>Radio</h2>
        <RadioExample />
        <h2>Rate</h2>
        <RateExample />
        <h2>Select</h2>
        <SelectExample />
        <h2>Slider</h2>
        <SliderExample />
        <h2>Switch</h2>
        <SwitchExample />
        <h2>TimePicker</h2>
        <TimePickerExample />
        <h2>Transfer</h2>
        <TransferExample />
        <h2>TreeSelect</h2>
        <TreeSelectExample />
        <h2>Upload</h2>
        <UploadExample />
        <h2>Avatar / Badge</h2>
        <AvatarExample />
        <h2>Calendar</h2>
        <CalendarExample />
        <h2>Card</h2>
        <CardExample />
        <h2>Carousel</h2>
        <CarouselExample />
        <h2>Collapse</h2>
        <CollapseExample />
        <h2>Comment</h2>
        <CommentExample />
        <h2>Description</h2>
        <DescriptionsExample />
        <h2>Empty</h2>
        <EmptyExample />
        <h2>Image</h2>
        <ImageExample />
        <h2>List</h2>
        <ListExample />
        <h2>Popover</h2>
        <PopoverExample />
        <h2>Statistic</h2>
        <StatisticExample />
        <h2>Table</h2>
        <TableExample />
        <h2>Tabs</h2>
        <TabsExample />
        <h2>Tag</h2>
        <TagExample />
        <h2>Timeline</h2>
        <TimelineExample />
        <h2>Tooltip</h2>
        <TooltipExample />
        <h2>Tree</h2>
        <TreeExample />
        <h2>Drawer</h2>
        <DrawerExample />
        <h2>Message</h2>
        <MessageExample />
        <h2>Modal</h2>
        <ModalExample />
        <h2>Notification</h2>
        <NotificationExample />
        <h2>Popconfirm</h2>
        <PopconfirmExample />
        <h2>Progress</h2>
        <ProgressExample />
        <h2>Result</h2>
        <ResultExample />
        <h2>Skeleton</h2>
        <SkeletonExample />
        <h2>Spin</h2>
        <SpinExample />
        <h2>Anchor</h2>
        <AnchorExample />
        <h2>BackTop</h2>
        <BackTopExample />
      </div>
    </div>
  );
}

export default App;
